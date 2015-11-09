class apt_update {
  exec { "aptGetUpdate":
    command => "sudo apt-get update",
    path    => ["/bin", "/usr/bin"]
  }
}

class othertools {
  package { "git":
    ensure  => latest,
    require => Exec["aptGetUpdate"]
  }

  package { "vim-common":
    ensure  => latest,
    require => Exec["aptGetUpdate"]
  }

  package { "curl":
    ensure  => present,
    require => Exec["aptGetUpdate"]
  }

  package { "htop":
    ensure  => present,
    require => Exec["aptGetUpdate"]
  }

  package { "tree":
    ensure  => present,
    require => Exec["aptGetUpdate"]
  }
}

class { 'elasticsearch':
  package_url => 'https://download.elasticsearch.org/elasticsearch/elasticsearch/elasticsearch-1.7.3.deb',
  config      => {
    'cluster.name' => 'sakila-cluster',
    #'http.jsonp.enable' => true,
    'http.enabled' => true,
    'http.cors.enabled' => true,
    'http.cors.allow-origin' => '"*"',
    #'http.cors.allow-methods' => 'OPTIONS, HEAD, GET, POST, PUT, DELETE',
    #'http.cors.allow-headers' => 'X-Requested-With,X-Auth-Token,Content-Type, Content-Length',
    'network'      => {
      'host' => '0.0.0.0',
    },
  },
}

elasticsearch::instance { 'es-01':
  #datadir => '/var/lib/elasticsearch-data',
}

elasticsearch::plugin{ 'mobz/elasticsearch-head':
  instances => [ 'es-01' ],
}

include apt_update
include othertools
include stdlib
include java
include elasticsearch

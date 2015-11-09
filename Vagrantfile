# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
    config.vm.box = "ubuntu/precise32"
    config.vm.network "forwarded_port", guest: 9200, host: 9200
    config.vm.network "forwarded_port", guest: 9300, host: 9300
    config.vm.network "private_network", ip: "192.168.33.10"

  # config.vm.synced_folder "../data", "/vagrant_data"

   config.vm.provider "virtualbox" do |vb|
     vb.memory = "2048"
   end

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  # config.vm.provision "shell", inline: <<-SHELL
  #   sudo apt-get update
  #   sudo apt-get install -y apache2
  # SHELL
  config.vm.provision :puppet do |puppet|
    puppet.manifests_path = "puppet/manifests"
    puppet.module_path    = "puppet/modules"
    puppet.manifest_file  = "init.pp"
    puppet.options        = [
                              '--verbose',
                              #'--debug',
                            ]
  end
end

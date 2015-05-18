# vagrant_static_sites
boiler plate repository for static repositories to work on in github using nginx, node, express

###set up
`vagrant up`

###run

jump into your `static` folder and start creating some github projects/ test sites.

To run the localhost node app

    vagrant ssh
    cd /var/www/nodeapp
    node server

To navigate to one of your static projects just go to it in the browser:

	http://192.168.56.95:4830/static/demo/
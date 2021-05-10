# eb-deploy

## Author: Dan Engel

## Links

[Zip Upload](http://nodetest-env.eba-tnfweyk3.us-west-2.elasticbeanstalk.com)

[Elastic Beanstalk Deploy using GitHub Actions](http://ebdeploy-env.eba-tnfweyk3.us-west-2.elasticbeanstalk.com)

[GitHub PR](https://github.com/daneng1/eb-deploy/pull/4)

[Repo](https://github.com/daneng1/eb-deploy)

## Process

1. I already had an AWS account so I skipped ahead to creating a new EB app and an environment for the zip upload. 
1. I zipped the files and used the aws intereface to manually upload the zip file.
1. The site was then successfully deployed.
1. Then I created an action in my repo and pulled down the new yml file.
1. I updated the app name, env name, changed Deploy:master to Deploy:main and then ACP'd to GitHub.
1. I added the secret key and the access key to my GitHub secrets and deplyoyed the site.

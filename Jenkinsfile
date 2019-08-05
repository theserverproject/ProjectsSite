pipeline {
  agent any
  environment {
    CI = 'true'
  }
  stages {
    stage('Build') {
      steps {
        echo "Installing package requirements:"
        sh '(cd $WORKSPACE/projects && npm install)'
        sh '(cd $WORKSPACE/projects && npm run build)'
        sh 'mv $WORKSPACE/projects/build $WORKSPACE/projects/html'
      }
    }
    stage('Test') {
      steps {
        echo 'Test'
      }
    }
    stage('Master-Deploy') {
      when {
        expression { env.BRANCH_NAME == 'master' }
      }
      steps {
        sh 'sshpass -p $PROJECTSPASSWORD scp -r -oStrictHostKeyChecking=no $WORKSPACE/projects/html/ projects@$SERVER:$PROJECTSLOCATION'
      }
    }
    stage('Staging-Deploy') {
      when {
        expression { env.BRANCH_NAME == 'staging'  }
      }
      steps {
        sh 'sshpass -p $PROJECTSPASSWORD scp -r -oStrictHostKeyChecking=no $WORKSPACE/projects/html/ projects@$SERVER:$PROJECTSLOCATION'
      }
    }
  }
}

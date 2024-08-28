pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo "Etape de build"
                dir('frontend') {
                    sh "npm install" 
                }
            }
        }
        stage('Tests') {
            steps {
                sh "chmod +x -R ${env.WORKSPACE}"
                sh ' ./scripts/test.sh'
                echo "Etape de test"
            }
        }
        stage ('Deploy') {
            steps {
                echo "Etape de déploiement github"
                sh "chmod +x -R ${env.WORKSPACE}"
                dir('frontend') {
                    sh './scripts/deliver.sh' 
                    input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                    sh './scripts/kill.sh' 
                }
            }
        }
    }
}
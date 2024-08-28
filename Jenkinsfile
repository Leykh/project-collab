pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo "Etape de build"
            }
        }
        stage('Tests') {
            steps {
                echo "Etape de test"
                sh 'scripts/test.sh'
            }
        }
        stage ('Deploy') {
            steps {
                echo "Etape de déploiement github"
            }
        }
    }
}
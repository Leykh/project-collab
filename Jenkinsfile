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
                sh ' chmod +x ./scripts/test.sh'
                echo "Etape de test"
            }
        }
        stage ('Deploy') {
            steps {
                echo "Etape de déploiement github"
            }
        }
    }
}
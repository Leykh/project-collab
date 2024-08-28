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
                chmod +x sh 'scripts/test.sh'
            }
        }
        stage ('Deploy') {
            steps {
                echo "Etape de déploiement github"
            }
        }
    }
}
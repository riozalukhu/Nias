pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', credentialsId: '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', url: 'https://github.com/riozalukhu/Nias.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def dockerTag = "my-html-nginx:${env.BUILD_NUMBER}"

                    sh """
                       docker build -t $dockerTag .
                    """
                }
            }
        }

        stage('Deploy Docker Container') {
            steps {
                script {
                    
                    def portMappings = "-p 80:82 -p 443:443"

            
                    def containerName = "my-html-nginx-container"

                    
                    sh """
                        docker run -d --name $containerName $portMappings my-html-nginx:${env.BUILD_NUMBER}
                    """
                }
            }
        }

        stage('Cleanup') {
            steps {
              
                sh """
                    docker container prune -f
                    docker image prune -f
                """
            }
        }
    }

    post {
        success {
            echo "Deployment successful"
        }
        failure {
            echo "Deployment failed"
        }
    }
}


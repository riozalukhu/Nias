pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout your code from your version control system (e.g., Git)
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js and npm if not already installed
                sh 'curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -'
                sh 'sudo apt-get install -y nodejs'
                
                // Install project dependencies using npm
                sh 'npm install'
            }
        }

        stage('Run Unit Tests') {
            steps {
                // Run Jest tests
                sh 'npm test'
            }
        }
    }

    post {
        always {
            // Archive test results or any other post-build actions you need
            junit '**/test-results.xml'
        }
    }
}


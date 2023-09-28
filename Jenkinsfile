pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout your HTML+CSS project from your version control system (e.g., Git)
                // You can customize this step based on your VCS.
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install required dependencies (e.g., Node.js, npm)
                // This may vary based on your project's setup.
                sh 'npm install -g htmlhint csslint'
            }
        }

        stage('HTMLLint') {
            steps {
                // Run HTMLHint for HTML validation
                sh 'htmlhint ./*.html'
            }
        }

        stage('CSSLint') {
            steps {
                // Run CSSLint for CSS validation
                sh 'csslint ./*.css'
            }
        }

        stage('Deploy to Nginx') {
            steps {
                // Copy HTML and CSS files to Nginx web server directory
                sh 'cp -r ./*.html ./*.css /var/www/html/'
            }
        }
    }

    post {
        always {
            // Cleanup: Remove any temporary files or directories
            sh 'rm -rf node_modules'
        }
    }
}


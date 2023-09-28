pipeline {
    agent any
    stages {
        stage('Code Static Analysis Inspection') {
            steps {
                withSonarQubeEnv('SonarQube_Server') {
                    sh 'sonar-scanner'
                }
            }
        }
    }
}

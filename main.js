

        const quizData = [
            {
                question: "Who was the first President of the United States?",
                options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
                correct: 1
            },
            {
                question: "In which year did World War II end?",
                options: ["1918", "1941", "1945", "1950"],
                correct: 2
            },
            {
                question: "Which ancient civilization built the Great Pyramids?",
                options: ["Romans", "Greeks", "Mayans", "Egyptians"],
                correct: 3
            }
        ];

        let currentQuestionIndex = 0;
        let score = 0;

        const questionEl = document.getElementById('question');
        const optionsContainer = document.getElementById('options-container');
        const scoreEl = document.getElementById('score-area');
        const gameSection = document.getElementById('game-section');
        const resultSection = document.getElementById('result-section');
        const finalScoreEl = document.getElementById('final-score');

        function startQuiz() {
            currentQuestionIndex = 0;
            score = 0;
            scoreEl.innerText = `Score: ${score}`;
            resultSection.classList.add('hidden');
            gameSection.classList.remove('hidden');
            showQuestion();
        }

        function showQuestion() {
            const currentData = quizData[currentQuestionIndex];
            questionEl.innerText = currentData.question;
            
            optionsContainer.innerHTML = '';

            currentData.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.innerText = option;
                button.classList.add('option-btn');
                button.onclick = () => checkAnswer(index);
                optionsContainer.appendChild(button);
            });
        }

        function checkAnswer(selectedIndex) {
            if (selectedIndex === quizData[currentQuestionIndex].correct) {
                score++;
                scoreEl.innerText = `Score: ${score}`;
                alert("Correct! 🎉");
            } else {
                alert("Wrong! ❌");
            }

            currentQuestionIndex++;

            if (currentQuestionIndex < quizData.length) {
                showQuestion();
            } else {
                endQuiz();
            }
        }

        function endQuiz() {
            gameSection.classList.add('hidden');
            resultSection.classList.remove('hidden');
            finalScoreEl.innerText = `You got ${score} out of ${quizData.length} correct!`;
        }

        // Start the game when page loads
        startQuiz();
    

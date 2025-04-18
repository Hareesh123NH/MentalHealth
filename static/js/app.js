// Sample data for mood tracking
const moodData = {
    labels: ['Happy', 'Calm', 'Anxious', 'Stressed', 'Sad'],
    datasets: [{
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
            '#ffcc00',
            '#00cc66',
            '#ff3300',
            '#ff9900',
            '#6699ff'
        ]
    }]
};

// Initialize mood chart
const ctx = document.getElementById('moodChart').getContext('2d');
const moodChart = new Chart(ctx, {
    type: 'pie',
    data: moodData,
});


// Recommendations based on mood analysis
const recommendations = [
    { emotion: 'Anxious', suggestion: 'Try a 5-minute breathing exercise.' },
    { emotion: 'Stressed', suggestion: 'Listen to calming music or meditate.' },
    { emotion: 'Sad', suggestion: 'Consider reaching out to a friend or therapist.' },
];

// Populate recommendations
const recommendationsList = document.getElementById('recommendations-list');
recommendations.forEach(rec => {
    const li = document.createElement('li');
    li.textContent = `${rec.emotion}: ${rec.suggestion}`;
    recommendationsList.appendChild(li);
});

class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 800;
        this.canvas.height = 300;

        // Player setup
        this.player = {
            x: 50,
            y: 200,
            width: 50,
            height: 50,
            velocity: 0
        };

        // Load player image
        this.playerImage = new Image();
        this.playerImage.src = 'elina.png';

        // Check if image loads
        this.playerImage.onload = () => {
            console.log('Player image loaded');
            this.draw();
        };

        // Event listeners
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                this.jump();
            }
        });
    }

    jump() {
        if (!this.isJumping) {
            this.player.velocity = -10;
            this.isJumping = true;
        }
    }

    draw() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw ground
        this.ctx.fillStyle = '#8B4513';
        this.ctx.fillRect(0, this.canvas.height - 20, this.canvas.width, 20);

        // Draw player
        this.ctx.drawImage(
            this.playerImage,
            this.player.x,
            this.player.y,
            this.player.width,
            this.player.height
        );
    }
}

// Wait for everything to load
window.onload = () => {
    new Game();
}; 
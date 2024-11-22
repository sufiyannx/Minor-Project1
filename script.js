document.addEventListener("DOMContentLoaded", function() {
            setTimeout(function() {
                document.getElementById('loading-screen').classList.add('loading-fade-out');
                setTimeout(function() {
                    document.getElementById('loading-screen').style.display = 'none';
                }, 1000);
            }, 2000);
        });
  
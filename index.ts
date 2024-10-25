let div = document.getElementById('main') as HTMLDivElement | null;
let display: number = 0;

function hideShow(): void {
    if (div) {
        if (display === 1) {
            div.style.display = 'block';
            display = 0;
        } else {
            div.style.display = 'none';
            display = 1;
        }
    }
}

export function typeText(text: string, onUpdate: (v: string) => void) {
    let i = 0;
    const interval = setInterval(() => {
        onUpdate(text.slice(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
    }, 70);
}

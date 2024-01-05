interface Color {
    id: string;
    name: string;
    hex: string;
}

const colors: Color[] = [
    { id: 'light', name: 'Light', hex: '#edf8fe' },
    { id: 'gray', name: 'Gray', hex: '#c1e1f3' },
    { id: 'turquoise', name: 'Turquoise', hex: '#2ad8f0' },
    { id: 'cerulean', name: 'Cerulean', hex: '#23c0ff' },
    { id: 'hidden-sapphire', name: 'Hidden Sapphire', hex: '#015881' },
    { id: 'aegean', name: 'Aegean', hex: '#004460' },
    { id: 'dusk', name: 'Dusk', hex: '#011e30' },
    { id: 'midnight', name: 'Midnight', hex: '#011119' },
    { id: 'topaz', name: 'Topaz', hex: '#ffce84' },
    { id: 'seagreen', name: 'Seagreen', hex: '#44e1bb' },
    { id: 'blush', name: 'Blush', hex: '#e35490' }
];

export default colors;

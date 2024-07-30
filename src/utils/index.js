export { default as KaseLogo } from './Logo';
export { default as CartIcon } from './CartIcon';
export { default as Router } from './Router';
export { default as SwitchIcon } from './SwitchIcon';
export { default as ThemeWrapper } from './ThemeWrapper';
export { default as makeRequest } from './makeRequest';
export { LightTheme } from './Themes';
export { DarkTheme } from './Themes';
export { generateAmount } from './GenerateAmount';

export const formatPrice = (price) => {
    const nairaAmount = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
    }).format((price / 60).toFixed(2));

    return nairaAmount;
};


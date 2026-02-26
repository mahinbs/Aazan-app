import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import { Colors } from '../../constants/Colors';

interface AppTextProps {
    children: React.ReactNode;
    variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'label' | 'display';
    style?: StyleProp<TextStyle>;
    color?: string;
    numberOfLines?: number;
    weight?: '400' | '500' | '600' | '700' | '800';
}

export const AppText: React.FC<AppTextProps> = ({
    children,
    variant = 'body',
    style,
    color,
    numberOfLines,
    weight,
}) => {
    const getVariantStyle = () => {
        switch (variant) {
            case 'display':
                return styles.display;
            case 'h1':
                return styles.h1;
            case 'h2':
                return styles.h2;
            case 'h3':
                return styles.h3;
            case 'caption':
                return styles.caption;
            case 'label':
                return styles.label;
            default:
                return styles.body;
        }
    };

    const textColor = color || (variant === 'caption' ? Colors.text.muted : (variant === 'body' ? Colors.text.secondary : Colors.text.primary));

    return (
        <Text
            style={[
                getVariantStyle(),
                { color: textColor },
                weight ? { fontWeight: weight } : null,
                style,
            ]}
            numberOfLines={numberOfLines}
        >
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    display: {
        fontSize: 34,
        fontWeight: '800',
        lineHeight: 42,
        letterSpacing: -0.5,
    },
    h1: {
        fontSize: 28,
        fontWeight: '700',
        lineHeight: 34,
        letterSpacing: -0.3,
    },
    h2: {
        fontSize: 22,
        fontWeight: '700',
        lineHeight: 28,
    },
    h3: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 24,
    },
    body: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
    },
    caption: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
    },
    label: {
        fontSize: 12,
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
});

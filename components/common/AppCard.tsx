import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Colors } from '../../constants/Colors';

interface AppCardProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    highlighted?: boolean;
    variant?: 'default' | 'outline' | 'glass' | 'elevated' | 'navy';
}

export const AppCard: React.FC<AppCardProps> = ({ children, style, highlighted, variant = 'default' }) => {
    if (variant === 'glass') {
        return (
            <BlurView intensity={20} tint="light" style={[styles.card, styles.glass, style]}>
                {children}
            </BlurView>
        );
    }

    const getVariantStyle = () => {
        switch (variant) {
            case 'outline':
                return styles.outline;
            case 'elevated':
                return styles.elevated;
            case 'navy':
                return styles.navy;
            default:
                return styles.default;
        }
    };

    return (
        <View style={[styles.card, getVariantStyle(), highlighted && styles.highlighted, style]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 18,
        padding: 20,
        marginBottom: 16,
        overflow: 'hidden',
    },
    default: {
        backgroundColor: Colors.background.card,
        borderWidth: 1,
        borderColor: Colors.border.light,
        shadowColor: Colors.primary.dark,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 10,
        elevation: 2,
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 1.5,
        borderColor: Colors.border.default,
    },
    elevated: {
        backgroundColor: Colors.background.card,
        shadowColor: Colors.primary.dark,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.08,
        shadowRadius: 20,
        elevation: 10,
    },
    glass: {
        backgroundColor: Colors.background.glass,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    navy: {
        backgroundColor: Colors.primary.dark,
    },
    highlighted: {
        borderLeftWidth: 5,
        borderLeftColor: Colors.secondary.teal,
    },
});

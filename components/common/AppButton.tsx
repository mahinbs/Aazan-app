import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ActivityIndicator, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { Colors } from '../../constants/Colors';

interface AppButtonProps {
    title: string;
    onPress: () => void;
    type?: 'primary' | 'secondary' | 'gold' | 'outline' | 'gradient' | 'tealGradient';
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    loading?: boolean;
    disabled?: boolean;
}

export const AppButton: React.FC<AppButtonProps> = ({
    title,
    onPress,
    type = 'primary',
    style,
    textStyle,
    loading = false,
    disabled = false,
}) => {
    const isGradient = type === 'gradient' || type === 'tealGradient';

    const getButtonStyle = () => {
        switch (type) {
            case 'secondary':
                return styles.secondary;
            case 'gold':
                return styles.gold;
            case 'outline':
                return styles.outline;
            case 'gradient':
            case 'tealGradient':
                return styles.gradientBase;
            default:
                return styles.primary;
        }
    };

    const getTextStyle = () => {
        switch (type) {
            case 'outline':
                return styles.outlineText;
            case 'gold':
                return styles.goldText;
            default:
                return styles.primaryText;
        }
    };

    const gradientColors = type === 'gradient' ? Colors.gradients.primary : Colors.gradients.teal;

    const Content = () => (
        loading ? (
            <ActivityIndicator color={type === 'outline' ? Colors.primary.dark : Colors.text.white} />
        ) : (
            <Text style={[styles.textBase, getTextStyle(), textStyle]}>{title}</Text>
        )
    );

    if (isGradient) {
        return (
            <TouchableOpacity
                onPress={onPress}
                disabled={disabled || loading}
                style={[styles.container, style]}
                activeOpacity={0.8}
            >
                <LinearGradient
                    colors={gradientColors as any}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[styles.base, (disabled || loading) && styles.disabled]}
                >
                    <Content />
                </LinearGradient>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled || loading}
            style={[styles.base, getButtonStyle(), style, (disabled || loading) && styles.disabled]}
            activeOpacity={0.8}
        >
            <Content />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 56,
        borderRadius: 28,
        overflow: 'hidden',
    },
    base: {
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 28,
        flexDirection: 'row',
    },
    gradientBase: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBase: {
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.3,
    },
    primary: {
        backgroundColor: Colors.secondary.teal,
    },
    primaryText: {
        color: Colors.text.white,
    },
    secondary: {
        backgroundColor: Colors.primary.blue,
    },
    gold: {
        backgroundColor: Colors.accent.gold,
    },
    goldText: {
        color: Colors.primary.dark,
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 1.5,
        borderColor: Colors.primary.dark,
    },
    outlineText: {
        color: Colors.primary.dark,
    },
    disabled: {
        opacity: 0.6,
    },
});

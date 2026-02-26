import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton } from '../../components/common/AppButton';
import { AppCard } from '../../components/common/AppCard';
import { AppText } from '../../components/common/AppText';
import { Colors } from '../../constants/Colors';

export default function AuthScreen() {
    const { role } = useLocalSearchParams<{ role: string }>();
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleAuth = () => {
        if (role === 'student') {
            router.replace('/(student)');
        } else {
            router.replace('/(teacher)');
        }
    };

    return (
        <View style={styles.container}>
            <LinearGradient colors={Colors.gradients.primary} style={styles.topArea}>
                <SafeAreaView edges={['top']}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                        <Ionicons name="arrow-back" size={24} color="#FFF" />
                    </TouchableOpacity>
                    <View style={styles.header}>
                        <AppText variant="display" color="#FFF" style={styles.title}>
                            {isLogin ? 'Welcome Back' : 'Get Started'}
                        </AppText>
                        <AppText variant="caption" color="rgba(255,255,255,0.7)">
                            {role === 'student' ? 'Student Portal' : 'Professor Portal'}
                        </AppText>
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <View style={styles.content}>
                <AppCard variant="elevated" style={styles.authCard}>
                    <View style={styles.inputGroup}>
                        <AppText variant="label" style={styles.label}>EMAIL ADDRESS</AppText>
                        <View style={styles.inputContainer}>
                            <Ionicons name="mail-outline" size={20} color={Colors.text.muted} />
                            <TextInput
                                value={email}
                                onChangeText={setEmail}
                                placeholder="name@example.com"
                                style={styles.input}
                                autoCapitalize="none"
                            />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <AppText variant="label" style={styles.label}>PASSWORD</AppText>
                        <View style={styles.inputContainer}>
                            <Ionicons name="lock-closed-outline" size={20} color={Colors.text.muted} />
                            <TextInput
                                value={password}
                                onChangeText={setPassword}
                                placeholder="••••••••"
                                style={styles.input}
                                secureTextEntry
                            />
                        </View>
                    </View>

                    {isLogin && (
                        <TouchableOpacity style={styles.forgotBtn}>
                            <AppText variant="label" color={Colors.primary.blue}>Forgot Password?</AppText>
                        </TouchableOpacity>
                    )}

                    <AppButton
                        title={isLogin ? 'Sign In' : 'Create Account'}
                        type="gradient"
                        onPress={handleAuth}
                        style={styles.actionBtn}
                    />
                </AppCard>

                <View style={styles.footer}>
                    <AppText variant="body" color={Colors.text.secondary}>
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                    </AppText>
                    <TouchableOpacity onPress={() => {
                        if (isLogin) {
                            router.push(role === 'student' ? '/auth/signup-student' : '/auth/signup-teacher');
                        } else {
                            setIsLogin(true);
                        }
                    }}>
                        <AppText variant="body" weight="700" color={Colors.secondary.teal}>
                            {isLogin ? 'Sign Up' : 'Sign In'}
                        </AppText>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background.main,
    },
    topArea: {
        paddingBottom: 40,
        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 36,
    },
    backBtn: {
        marginLeft: 20,
        marginTop: 10,
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: 'rgba(255,255,255,0.15)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 32,
        marginBottom: 8,
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        marginTop: -30,
    },
    authCard: {
        padding: 30,
        borderRadius: 32,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 10,
        marginBottom: 8,
        color: Colors.text.muted,
        fontWeight: '700',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.border.default,
        borderRadius: 16,
        paddingHorizontal: 15,
        height: 56,
        backgroundColor: '#F8FAFC',
    },
    input: {
        flex: 1,
        marginLeft: 12,
        fontSize: 15,
        color: Colors.text.primary,
    },
    forgotBtn: {
        alignSelf: 'flex-end',
        marginBottom: 25,
    },
    actionBtn: {
        marginTop: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 35,
    },
});

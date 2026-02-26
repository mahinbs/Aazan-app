import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppCard } from '../components/common/AppCard';
import { AppText } from '../components/common/AppText';
import { Colors } from '../constants/Colors';

export default function RoleSelection() {
    const router = useRouter();

    const handleSelectRole = (role: string) => {
        router.push({
            pathname: '/auth',
            params: { role }
        });
    };

    return (
        <View style={styles.container}>
            <LinearGradient colors={Colors.gradients.primary} style={styles.topArea}>
                <SafeAreaView edges={['top']}>
                    <View style={styles.header}>
                        <Image
                            source={require('../assets/logo/azan-logo.png')}
                            style={styles.logo}
                            contentFit="contain"
                        />
                        <AppText variant="display" color="#FFFFFF" style={styles.title}>Join the Ecosystem</AppText>
                        <AppText variant="caption" color="rgba(255,255,255,0.7)" style={styles.subtitle}>
                            Select your path to academic excellence
                        </AppText>
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.rolesContainer}>
                    <TouchableOpacity onPress={() => handleSelectRole('student')} activeOpacity={0.85}>
                        <AppCard style={styles.card} variant="elevated">
                            <View style={styles.cardContent}>
                                <View style={[styles.iconContainer, { backgroundColor: Colors.secondary.aquaLight }]}>
                                    <Ionicons name="school-outline" size={34} color={Colors.secondary.teal} />
                                </View>
                                <View style={styles.textContainer}>
                                    <AppText variant="h2">Be a Student</AppText>
                                    <AppText variant="caption">Access world-class experts and smart AI tools.</AppText>
                                </View>
                                <View style={styles.arrowCircle}>
                                    <Ionicons name="arrow-forward" size={18} color="#FFF" />
                                </View>
                            </View>
                        </AppCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleSelectRole('teacher')} activeOpacity={0.85}>
                        <AppCard style={styles.card} variant="elevated">
                            <View style={styles.cardContent}>
                                <View style={[styles.iconContainer, { backgroundColor: '#EEF2FF' }]}>
                                    <Ionicons name="briefcase-outline" size={34} color={Colors.primary.blue} />
                                </View>
                                <View style={styles.textContainer}>
                                    <AppText variant="h2">Be a Professor</AppText>
                                    <AppText variant="caption">Share your expertise and grow your career.</AppText>
                                </View>
                                <View style={[styles.arrowCircle, { backgroundColor: Colors.primary.blue }]}>
                                    <Ionicons name="arrow-forward" size={18} color="#FFF" />
                                </View>
                            </View>
                        </AppCard>
                    </TouchableOpacity>

                </View>
            </ScrollView>
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
    header: {
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 40,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        textAlign: 'center',
        marginBottom: 8,
        fontSize: 32,
    },
    subtitle: {
        textAlign: 'center',
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 40,
    },
    rolesContainer: {
        gap: 20,
    },
    card: {
        padding: 24,
        marginBottom: 0,
        borderRadius: 28,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 68,
        height: 68,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    textContainer: {
        flex: 1,
    },
    arrowCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: Colors.secondary.teal,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    adminFooter: {
        alignItems: 'center',
    },
    adminLink: {
        color: Colors.primary.blue,
        fontWeight: '800',
    },
    footerIcon: {
        marginBottom: 15,
    },
});

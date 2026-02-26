import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton } from '../../components/common/AppButton';
import { AppCard } from '../../components/common/AppCard';
import { AppText } from '../../components/common/AppText';
import { Colors } from '../../constants/Colors';

export default function TeacherHome() {
    const [isOnline, setIsOnline] = useState(false);
    const router = useRouter();

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#1E2A5A', '#1E2A5A']} style={styles.topBar}>
                <SafeAreaView edges={['top']}>
                    <View style={styles.header}>
                        <View>
                            <AppText variant="h2" color="#FFFFFF">Professor Portal</AppText>
                            <AppText variant="caption" color="rgba(255,255,255,0.6)">Control Center</AppText>
                        </View>
                        <View style={styles.headerActions}>
                            <TouchableOpacity style={styles.notificationBtn}>
                                <Ionicons name="notifications-outline" size={24} color="#FFF" />
                                <View style={styles.redDot} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => router.push('/(teacher)/profile')}>
                                <Image
                                    source={{ uri: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop' }}
                                    style={styles.avatar}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Availability Suite */}
                <AppCard variant="elevated" style={styles.presenceCard}>
                    <View style={styles.presenceRow}>
                        <View style={styles.presenceInfo}>
                            <View style={[styles.statusRing, { borderColor: isOnline ? Colors.secondary.teal : Colors.text.muted }]}>
                                <View style={[styles.statusCore, { backgroundColor: isOnline ? Colors.secondary.teal : Colors.text.muted }]} />
                            </View>
                            <View>
                                <AppText variant="h3" style={{ fontSize: 17 }}>Live Teaching</AppText>
                                <AppText variant="caption">{isOnline ? 'Broadcasting your availability' : 'Hidden from instant sessions'}</AppText>
                            </View>
                        </View>
                        <Switch
                            value={isOnline}
                            onValueChange={setIsOnline}
                            trackColor={{ false: '#E2E8F0', true: Colors.secondary.teal }}
                            thumbColor="#FFFFFF"
                            ios_backgroundColor="#E2E8F0"
                        />
                    </View>
                    {isOnline && (
                        <View style={styles.onlineBadge}>
                            <AppText variant="label" color={Colors.secondary.teal} style={{ fontSize: 10 }}>STUDENTS CAN CONNECT NOW</AppText>
                        </View>
                    )}
                </AppCard>

                {/* Performance Analytics */}
                <View style={styles.sectionHeader}>
                    <AppText variant="h3">Performance</AppText>
                    <TouchableOpacity onPress={() => router.push('/(teacher)/wallet')}>
                        <AppText variant="caption" color={Colors.primary.blue}>View Wallet</AppText>
                    </TouchableOpacity>
                </View>
                <View style={styles.analyticsGrid}>
                    <AppCard style={styles.analyticsBox}>
                        <View style={[styles.iconBox, { backgroundColor: '#EEF2FF' }]}>
                            <Ionicons name="wallet-outline" size={20} color={Colors.primary.blue} />
                        </View>
                        <AppText variant="label" style={styles.analyticsLabel}>Earnings</AppText>
                        <AppText variant="h2">$1,240</AppText>
                    </AppCard>
                    <AppCard style={styles.analyticsBox}>
                        <View style={[styles.iconBox, { backgroundColor: '#ECFDF5' }]}>
                            <Ionicons name="people-outline" size={20} color={Colors.secondary.teal} />
                        </View>
                        <AppText variant="label" style={styles.analyticsLabel}>Rating</AppText>
                        <AppText variant="h2">4.95</AppText>
                    </AppCard>
                </View>

                {/* Virtual Classrooms */}
                <View style={styles.sectionHeader}>
                    <AppText variant="h3">Digital Classrooms</AppText>
                    <TouchableOpacity onPress={() => router.push('/(teacher)/classrooms')}>
                        <AppText variant="caption" color={Colors.primary.blue}>Manage</AppText>
                    </TouchableOpacity>
                </View>
                <AppCard variant="navy" style={styles.webinarCard}>
                    <View style={styles.webinarContent}>
                        <View style={styles.webinarText}>
                            <View style={styles.liveTag}>
                                <View style={styles.liveDot} />
                                <AppText variant="label" color="#FFF" style={{ fontSize: 9 }}>UPCOMING</AppText>
                            </View>
                            <AppText variant="h3" color="#FFF" style={{ marginTop: 8 }}>Quantum Physics Masterclass</AppText>
                            <AppText variant="caption" color="rgba(255,255,255,0.6)">
                                Today <Ionicons name="ellipse" size={4} color="rgba(255,255,255,0.4)" /> 6:00 PM <Ionicons name="ellipse" size={4} color="rgba(255,255,255,0.4)" /> 120 Enrolled
                            </AppText>
                        </View>
                        <AppButton
                            title="Prep"
                            type="gold"
                            onPress={() => { }}
                            style={styles.prepBtn}
                            textStyle={{ fontSize: 12 }}
                        />
                    </View>
                </AppCard>

                {/* Quick Ecosystem Access */}
                <AppText variant="h3" style={{ marginBottom: 15, marginTop: 10 }}>Ecosystem</AppText>
                <View style={styles.quickActions}>
                    <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
                        <LinearGradient colors={['#F1F5F9', '#F8FAFC']} style={styles.actionInner}>
                            <Ionicons name="add-circle-outline" size={28} color={Colors.primary.dark} />
                            <AppText variant="label" style={styles.actionText}>New Class</AppText>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
                        <LinearGradient colors={['#F1F5F9', '#F8FAFC']} style={styles.actionInner}>
                            <Ionicons name="documents-outline" size={28} color={Colors.primary.dark} />
                            <AppText variant="label" style={styles.actionText}>Materials</AppText>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionCard} activeOpacity={0.8}>
                        <LinearGradient colors={['#F1F5F9', '#F8FAFC']} style={styles.actionInner}>
                            <Ionicons name="chatbubbles-outline" size={28} color={Colors.primary.dark} />
                            <AppText variant="label" style={styles.actionText}>Forum</AppText>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background.main,
    },
    topBar: {
        paddingBottom: 20,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 10,
    },
    headerActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.2)',
    },
    notificationBtn: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 14,
    },
    redDot: {
        position: 'absolute',
        top: 12,
        right: 12,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: Colors.status.error,
        borderWidth: 1.5,
        borderColor: Colors.primary.dark,
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 25,
    },
    presenceCard: {
        marginBottom: 30,
        borderRadius: 24,
        padding: 24,
    },
    presenceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    presenceInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    statusRing: {
        width: 44,
        height: 44,
        borderRadius: 22,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusCore: {
        width: 24,
        height: 24,
        borderRadius: 12,
    },
    onlineBadge: {
        marginTop: 15,
        backgroundColor: Colors.secondary.aquaLight,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 10,
        alignSelf: 'flex-start',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    analyticsGrid: {
        flexDirection: 'row',
        gap: 15,
        marginBottom: 30,
    },
    analyticsBox: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        borderRadius: 20,
    },
    iconBox: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    analyticsLabel: {
        fontSize: 10,
        marginBottom: 5,
    },
    webinarCard: {
        borderRadius: 24,
        padding: 24,
        marginBottom: 30,
    },
    webinarContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    webinarText: {
        flex: 1,
    },
    liveTag: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        backgroundColor: 'rgba(255,255,255,0.1)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        alignSelf: 'flex-start',
    },
    liveDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: Colors.accent.gold,
    },
    prepBtn: {
        width: 70,
        height: 40,
    },
    quickActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionCard: {
        width: '30%',
    },
    actionInner: {
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.border.light,
    },
    actionText: {
        marginTop: 10,
        fontSize: 10,
    },
});

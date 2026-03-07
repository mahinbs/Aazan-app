import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton } from '../../components/common/AppButton';
import { AppCard } from '../../components/common/AppCard';
import { AppText } from '../../components/common/AppText';
import { Colors } from '../../constants/Colors';

const REFERRAL_CODE = 'AAZAAN-STU-2K26';

const REFERRAL_HISTORY = [
    { id: '1', name: 'Priya S.', date: 'Mar 5, 2026', status: 'Joined', type: 'student' },
    { id: '2', name: 'Ravi K.', date: 'Mar 3, 2026', status: 'Joined', type: 'student' },
    { id: '3', name: 'Anita M.', date: 'Feb 28, 2026', status: 'Pending', type: 'student' },
];

export default function ReferralPage() {
    const router = useRouter();
    const [copied, setCopied] = useState(false);
    const studentReferrals = REFERRAL_HISTORY.filter((r) => r.type === 'student' && r.status === 'Joined').length;

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <View style={styles.container}>
            <LinearGradient colors={Colors.gradients.primary} style={styles.topArea}>
                <SafeAreaView edges={['top']}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                            <Ionicons name="arrow-back" size={24} color="#FFF" />
                        </TouchableOpacity>
                        <View style={styles.headerText}>
                            <AppText variant="h2" color="#FFFFFF">Refer & Earn</AppText>
                            <AppText variant="caption" color="rgba(255,255,255,0.7)">Share AAZAAN with friends</AppText>
                        </View>
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Referral Code Card */}
                <AppCard variant="elevated" style={styles.codeCard}>
                    <AppText variant="label" style={styles.codeLabel}>YOUR REFERRAL CODE</AppText>
                    <View style={styles.codeRow}>
                        <View style={styles.codeBadge}>
                            <AppText variant="h2" color={Colors.primary.dark} style={{ letterSpacing: 2 }}>{REFERRAL_CODE}</AppText>
                        </View>
                        <TouchableOpacity style={styles.copyBtn} onPress={handleCopy} activeOpacity={0.7}>
                            <Ionicons name={copied ? 'checkmark' : 'copy-outline'} size={20} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                    {copied && (
                        <AppText variant="label" color={Colors.status.success} style={{ marginTop: 8, fontSize: 10 }}>
                            COPIED TO CLIPBOARD
                        </AppText>
                    )}
                    <AppButton
                        title="Share Referral Link"
                        type="tealGradient"
                        onPress={() => { }}
                        style={styles.shareBtn}
                    />
                </AppCard>

                {/* Progress Tracker */}
                <AppText variant="h3" style={{ marginBottom: 15 }}>Student Referral Progress</AppText>
                <AppCard variant="default" style={styles.progressCard}>
                    <View style={styles.progressHeader}>
                        <AppText variant="h3" color={Colors.secondary.teal}>{studentReferrals}/5</AppText>
                        <AppText variant="caption">students referred</AppText>
                    </View>
                    <View style={styles.progressBar}>
                        <LinearGradient
                            colors={Colors.gradients.teal as any}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={[styles.progressFill, { width: `${(studentReferrals / 5) * 100}%` }]}
                        />
                    </View>
                    <AppText variant="caption" style={styles.progressHint}>
                        {5 - studentReferrals} more to unlock your free 10-min doubt clearing session!
                    </AppText>
                </AppCard>

                {/* Bonus Rules */}
                <AppText variant="h3" style={{ marginBottom: 15, marginTop: 10 }}>Referral Bonuses</AppText>
                <View style={styles.bonusGrid}>
                    <AppCard style={styles.bonusCard}>
                        <LinearGradient
                            colors={Colors.gradients.teal as any}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.bonusGradient}
                        >
                            <View style={styles.bonusIcon}>
                                <Ionicons name="school" size={24} color={Colors.secondary.teal} />
                            </View>
                            <AppText variant="h3" color="#FFF" style={{ fontSize: 15, marginBottom: 4 }}>Refer 5 Students</AppText>
                            <AppText variant="caption" color="rgba(255,255,255,0.8)">
                                Get FREE 10-min doubt clearing session
                            </AppText>
                        </LinearGradient>
                    </AppCard>

                    <AppCard style={styles.bonusCard}>
                        <LinearGradient
                            colors={Colors.gradients.primary as any}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.bonusGradient}
                        >
                            <View style={[styles.bonusIcon, { backgroundColor: '#EEF2FF' }]}>
                                <Ionicons name="briefcase" size={24} color={Colors.primary.blue} />
                            </View>
                            <AppText variant="h3" color="#FFF" style={{ fontSize: 15, marginBottom: 4 }}>Refer 1 Teacher</AppText>
                            <AppText variant="caption" color="rgba(255,255,255,0.8)">
                                Get 1 FREE webinar session
                            </AppText>
                        </LinearGradient>
                    </AppCard>
                </View>

                {/* Referral History */}
                <AppText variant="h3" style={{ marginBottom: 15, marginTop: 10 }}>Referral History</AppText>
                {REFERRAL_HISTORY.map((item) => (
                    <View key={item.id} style={styles.historyItem}>
                        <View style={styles.historyAvatar}>
                            <AppText variant="h3" color="#FFF" style={{ fontSize: 14 }}>
                                {item.name.charAt(0)}
                            </AppText>
                        </View>
                        <View style={styles.historyInfo}>
                            <AppText variant="body" style={{ fontWeight: '600' }}>{item.name}</AppText>
                            <AppText variant="caption">{item.date}</AppText>
                        </View>
                        <View style={[styles.statusBadge, item.status === 'Joined' ? styles.joinedBadge : styles.pendingBadge]}>
                            <AppText
                                variant="label"
                                style={{ fontSize: 9 }}
                                color={item.status === 'Joined' ? Colors.status.success : Colors.accent.gold}
                            >
                                {item.status.toUpperCase()}
                            </AppText>
                        </View>
                    </View>
                ))}

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
    topArea: {
        paddingBottom: 25,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
        gap: 15,
    },
    backBtn: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: 'rgba(255,255,255,0.15)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 25,
    },
    codeCard: {
        borderRadius: 24,
        padding: 25,
        marginBottom: 30,
        alignItems: 'center',
    },
    codeLabel: {
        fontSize: 10,
        color: Colors.text.muted,
        marginBottom: 15,
    },
    codeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    codeBadge: {
        backgroundColor: Colors.background.section,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: Colors.border.default,
        borderStyle: 'dashed',
    },
    copyBtn: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: Colors.secondary.teal,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shareBtn: {
        marginTop: 20,
        width: '100%',
    },
    progressCard: {
        borderRadius: 20,
        padding: 24,
        marginBottom: 25,
    },
    progressHeader: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: 8,
        marginBottom: 15,
    },
    progressBar: {
        height: 8,
        backgroundColor: Colors.background.section,
        borderRadius: 4,
        overflow: 'hidden',
        marginBottom: 10,
    },
    progressFill: {
        height: '100%',
        borderRadius: 4,
    },
    progressHint: {
        color: Colors.text.muted,
        fontSize: 11,
    },
    bonusGrid: {
        gap: 15,
        marginBottom: 30,
    },
    bonusCard: {
        padding: 0,
        borderRadius: 20,
        overflow: 'hidden',
    },
    bonusGradient: {
        padding: 24,
    },
    bonusIcon: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: Colors.secondary.aquaLight,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    historyItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border.light,
    },
    historyAvatar: {
        width: 40,
        height: 40,
        borderRadius: 14,
        backgroundColor: Colors.primary.blue,
        justifyContent: 'center',
        alignItems: 'center',
    },
    historyInfo: {
        flex: 1,
        marginLeft: 15,
    },
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
    },
    joinedBadge: {
        backgroundColor: '#ECFDF5',
    },
    pendingBadge: {
        backgroundColor: Colors.accent.goldLight,
    },
});

import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppCard } from '../../components/common/AppCard';
import { AppText } from '../../components/common/AppText';
import { Colors } from '../../constants/Colors';

const TABS = ['My Classes', 'Sessions', 'Payouts', 'Referral'];

const CLASSES = [
    { id: '1', title: 'Calculus Advanced', students: 15, status: 'Active' },
    { id: '2', title: 'Physics Masterclass', students: 45, status: 'Active' },
    { id: '3', title: 'Linear Algebra', students: 28, status: 'Upcoming' },
];

const SESSIONS = [
    { id: '1', title: 'Doubt Session #421', date: 'Mar 5, 2:45 PM', duration: '30 min', student: 'Ahmed K.' },
    { id: '2', title: 'Group Tutoring', date: 'Mar 4, 4:00 PM', duration: '1 hr', student: '12 students' },
    { id: '3', title: 'Private Mentoring', date: 'Mar 2, 10:00 AM', duration: '45 min', student: 'Sara M.' },
];

const PAYOUTS = [
    { id: '1', title: 'Calculus Session #421', amount: '$45.00', date: 'Mar 5, 2026', status: 'Completed' },
    { id: '2', title: 'Physics Masterclass', amount: '$120.00', date: 'Mar 4, 2026', status: 'Completed' },
    { id: '3', title: 'Withdrawal to Bank', amount: '$500.00', date: 'Feb 20, 2026', status: 'Processed' },
];

export default function TeacherProfile() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(0);

    const MENU_ITEMS = [
        { icon: 'shield-checkmark', label: 'Verification Status', color: '#10B981' },
        { icon: 'settings', label: 'Account Settings', color: '#6B7280' },
        { icon: 'log-out', label: 'Sign Out', color: Colors.status.error },
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 0: // My Classes
                return CLASSES.map((cls) => (
                    <AppCard key={cls.id} variant="default" style={styles.itemCard}>
                        <View style={styles.itemRow}>
                            <View style={[styles.itemIcon, { backgroundColor: '#EEF2FF' }]}>
                                <Ionicons name="videocam" size={20} color={Colors.primary.blue} />
                            </View>
                            <View style={styles.itemInfo}>
                                <AppText variant="body" style={{ fontWeight: '600' }}>{cls.title}</AppText>
                                <AppText variant="caption">{cls.students} students enrolled</AppText>
                            </View>
                            <View style={[
                                styles.statusBadge,
                                { backgroundColor: cls.status === 'Active' ? '#ECFDF5' : Colors.accent.goldLight }
                            ]}>
                                <AppText
                                    variant="label"
                                    style={{ fontSize: 9 }}
                                    color={cls.status === 'Active' ? Colors.status.success : Colors.accent.gold}
                                >
                                    {cls.status.toUpperCase()}
                                </AppText>
                            </View>
                        </View>
                    </AppCard>
                ));
            case 1: // Sessions
                return SESSIONS.map((session) => (
                    <AppCard key={session.id} variant="default" style={styles.itemCard}>
                        <View style={styles.itemRow}>
                            <View style={[styles.itemIcon, { backgroundColor: '#ECFDF5' }]}>
                                <Ionicons name="time" size={20} color="#10B981" />
                            </View>
                            <View style={styles.itemInfo}>
                                <AppText variant="body" style={{ fontWeight: '600' }}>{session.title}</AppText>
                                <AppText variant="caption">{session.date} • {session.duration}</AppText>
                                <AppText variant="caption" color={Colors.primary.blue}>{session.student}</AppText>
                            </View>
                        </View>
                    </AppCard>
                ));
            case 2: // Payouts
                return PAYOUTS.map((payout) => (
                    <AppCard key={payout.id} variant="default" style={styles.itemCard}>
                        <View style={styles.itemRow}>
                            <View style={[styles.itemIcon, { backgroundColor: '#FFF7ED' }]}>
                                <Ionicons name="wallet" size={20} color="#F59E0B" />
                            </View>
                            <View style={styles.itemInfo}>
                                <AppText variant="body" style={{ fontWeight: '600' }}>{payout.title}</AppText>
                                <AppText variant="caption">{payout.date} • {payout.status}</AppText>
                            </View>
                            <AppText variant="h3" color={Colors.status.success} style={{ fontSize: 15 }}>{payout.amount}</AppText>
                        </View>
                    </AppCard>
                ));
            case 3: // Referral
                return (
                    <View>
                        <AppCard style={styles.referralBanner}>
                            <LinearGradient
                                colors={Colors.gradients.primary as any}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.referralGradient}
                            >
                                <Ionicons name="gift" size={32} color="#FFF" />
                                <View style={{ flex: 1, marginLeft: 15 }}>
                                    <AppText variant="h3" color="#FFF">Teacher Referral Program</AppText>
                                    <AppText variant="caption" color="rgba(255,255,255,0.8)" style={{ marginTop: 4 }}>
                                        Refer 5 students → Free 10-min doubt session{'\n'}
                                        Refer 1 teacher → Free webinar session
                                    </AppText>
                                </View>
                            </LinearGradient>
                        </AppCard>

                        <AppCard variant="default" style={styles.itemCard}>
                            <View style={styles.itemRow}>
                                <View style={[styles.itemIcon, { backgroundColor: Colors.secondary.aquaLight }]}>
                                    <Ionicons name="link" size={20} color={Colors.secondary.teal} />
                                </View>
                                <View style={styles.itemInfo}>
                                    <AppText variant="label" style={{ fontSize: 10, color: Colors.text.muted }}>YOUR REFERRAL CODE</AppText>
                                    <AppText variant="h3" style={{ fontSize: 15, letterSpacing: 1 }}>AAZAAN-PRO-2K26</AppText>
                                </View>
                                <TouchableOpacity style={styles.copyBtn}>
                                    <Ionicons name="copy-outline" size={18} color="#FFF" />
                                </TouchableOpacity>
                            </View>
                        </AppCard>

                        <AppCard variant="default" style={styles.itemCard}>
                            <View style={styles.progressHeader}>
                                <AppText variant="h3" color={Colors.secondary.teal}>3/5</AppText>
                                <AppText variant="caption" style={{ marginLeft: 8 }}>students referred</AppText>
                            </View>
                            <View style={styles.progressBar}>
                                <LinearGradient
                                    colors={Colors.gradients.teal as any}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={[styles.progressFill, { width: '60%' }]}
                                />
                            </View>
                            <AppText variant="caption" style={{ color: Colors.text.muted, fontSize: 11, marginTop: 6 }}>
                                2 more students to unlock your free doubt clearing session!
                            </AppText>
                        </AppCard>
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            <LinearGradient colors={Colors.gradients.primary} style={styles.topArea}>
                <SafeAreaView edges={['top']}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                            <Ionicons name="arrow-back" size={24} color="#FFF" />
                        </TouchableOpacity>
                        <AppText variant="h2" color="#FFFFFF">Professor Account</AppText>
                        <View style={{ width: 44 }} />
                    </View>

                    <View style={styles.profileBox}>
                        <View style={styles.avatarWrapper}>
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop' }}
                                style={styles.avatar}
                            />
                            <View style={styles.verifiedBadge}>
                                <Ionicons name="checkmark-circle" size={20} color="#FFF" />
                            </View>
                        </View>
                        <AppText variant="h2" color="#FFF" style={{ marginTop: 15 }}>Prof. James Chen</AppText>
                        <AppText variant="caption" color="rgba(255,255,255,0.6)">Senior Mathematics Educator</AppText>
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.badgeRow}>
                    <View style={styles.badge}>
                        <Ionicons name="star" size={14} color={Colors.accent.gold} />
                        <AppText variant="label" style={{ marginLeft: 6, color: Colors.primary.dark }}>TOP RATED</AppText>
                    </View>
                    <View style={styles.badge}>
                        <Ionicons name="medal" size={14} color={Colors.secondary.teal} />
                        <AppText variant="label" style={{ marginLeft: 6, color: Colors.primary.dark }}>EXPERT</AppText>
                    </View>
                </View>

                {/* Profile Tab Bar */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.tabBar}
                >
                    {TABS.map((tab, index) => (
                        <TouchableOpacity
                            key={tab}
                            style={[styles.tab, activeTab === index && styles.activeTab]}
                            onPress={() => setActiveTab(index)}
                            activeOpacity={0.7}
                        >
                            <AppText
                                variant="label"
                                color={activeTab === index ? '#FFF' : Colors.text.secondary}
                                style={{ fontSize: 12 }}
                            >
                                {tab}
                            </AppText>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Tab Content */}
                <View style={styles.tabContent}>
                    {renderTabContent()}
                </View>

                {/* Fixed Menu Items */}
                <View style={styles.menuDivider} />
                {MENU_ITEMS.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.menuItem}
                        activeOpacity={0.7}
                        onPress={() => {
                            if (item.label === 'Sign Out') {
                                router.replace('/role-selection');
                            }
                        }}
                    >
                        <View style={[styles.menuIcon, { backgroundColor: item.color + '15' }]}>
                            <Ionicons name={item.icon as any} size={20} color={item.color} />
                        </View>
                        <View style={styles.menuLabelContainer}>
                            <AppText variant="body" style={styles.menuLabel}>{item.label}</AppText>
                        </View>
                        <Ionicons name="chevron-forward" size={18} color={Colors.text.muted} />
                    </TouchableOpacity>
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
        paddingBottom: 30,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    backBtn: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: 'rgba(255,255,255,0.15)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileBox: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatarWrapper: {
        position: 'relative',
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 30,
        borderWidth: 4,
        borderColor: 'rgba(255,255,255,0.2)',
    },
    verifiedBadge: {
        position: 'absolute',
        top: -5,
        right: -5,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: Colors.secondary.teal,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: Colors.primary.dark,
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 25,
    },
    badgeRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 15,
        marginBottom: 25,
    },
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    tabBar: {
        gap: 8,
        marginBottom: 20,
    },
    tab: {
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 20,
        backgroundColor: Colors.background.card,
        borderWidth: 1,
        borderColor: Colors.border.light,
    },
    activeTab: {
        backgroundColor: Colors.primary.dark,
        borderColor: Colors.primary.dark,
    },
    tabContent: {
        minHeight: 150,
        marginBottom: 15,
    },
    itemCard: {
        borderRadius: 18,
        padding: 16,
        marginBottom: 10,
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemIcon: {
        width: 44,
        height: 44,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemInfo: {
        flex: 1,
        marginLeft: 15,
    },
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
    },
    copyBtn: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: Colors.secondary.teal,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressHeader: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 12,
    },
    progressBar: {
        height: 6,
        backgroundColor: Colors.background.section,
        borderRadius: 3,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        borderRadius: 3,
    },
    referralBanner: {
        padding: 0,
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 15,
    },
    referralGradient: {
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuDivider: {
        height: 1,
        backgroundColor: Colors.border.default,
        marginVertical: 10,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 18,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border.light,
    },
    menuIcon: {
        width: 44,
        height: 44,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuLabelContainer: {
        flex: 1,
        marginLeft: 15,
    },
    menuLabel: {
        fontSize: 16,
        fontWeight: '600',
    },
});

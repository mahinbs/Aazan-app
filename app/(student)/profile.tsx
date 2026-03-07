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

const TABS = ['My Courses', 'Sessions', 'Payments', 'Referral'];

const COURSES = [
    { id: '1', title: 'Advanced Calculus', teacher: 'Prof. James Chen', progress: 75 },
    { id: '2', title: 'Quantum Physics', teacher: 'Dr. Sarah Wilson', progress: 40 },
    { id: '3', title: 'Organic Chemistry', teacher: 'Maria Rodriguez', progress: 90 },
];

const SESSIONS = [
    { id: '1', title: 'Calculus Doubt Session', date: 'Mar 5, 2:30 PM', duration: '30 min', status: 'Completed' },
    { id: '2', title: 'Physics Problem Solving', date: 'Mar 3, 4:00 PM', duration: '45 min', status: 'Completed' },
    { id: '3', title: 'Chemistry Lab Prep', date: 'Mar 1, 10:00 AM', duration: '20 min', status: 'Cancelled' },
];

const PAYMENTS = [
    { id: '1', title: 'Calculus Masterclass', amount: '$15.00', date: 'Mar 5, 2026', status: 'Paid' },
    { id: '2', title: 'Physics Session', amount: '$8.50', date: 'Mar 3, 2026', status: 'Paid' },
    { id: '3', title: 'Monthly Subscription', amount: '$29.99', date: 'Mar 1, 2026', status: 'Paid' },
];

export default function StudentProfile() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(0);

    const MENU_ITEMS = [
        { icon: 'settings', label: 'Settings', color: '#6B7280' },
        { icon: 'help-circle', label: 'Help Center', color: '#3B82F6' },
        { icon: 'log-out', label: 'Logout', color: '#EF4444' },
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 0: // My Courses
                return COURSES.map((course) => (
                    <AppCard key={course.id} variant="default" style={styles.itemCard}>
                        <View style={styles.itemRow}>
                            <View style={[styles.itemIcon, { backgroundColor: '#EEF2FF' }]}>
                                <Ionicons name="book" size={20} color="#4F46E5" />
                            </View>
                            <View style={styles.itemInfo}>
                                <AppText variant="body" style={{ fontWeight: '600' }}>{course.title}</AppText>
                                <AppText variant="caption">{course.teacher}</AppText>
                            </View>
                        </View>
                        <View style={styles.progressRow}>
                            <View style={styles.progressBar}>
                                <LinearGradient
                                    colors={Colors.gradients.teal as any}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={[styles.progressFill, { width: `${course.progress}%` }]}
                                />
                            </View>
                            <AppText variant="label" style={{ fontSize: 10, marginLeft: 8 }}>{course.progress}%</AppText>
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
                            </View>
                            <View style={[
                                styles.statusBadge,
                                { backgroundColor: session.status === 'Completed' ? '#ECFDF5' : '#FEE2E2' }
                            ]}>
                                <AppText
                                    variant="label"
                                    style={{ fontSize: 9 }}
                                    color={session.status === 'Completed' ? Colors.status.success : Colors.status.error}
                                >
                                    {session.status.toUpperCase()}
                                </AppText>
                            </View>
                        </View>
                    </AppCard>
                ));
            case 2: // Payments
                return PAYMENTS.map((payment) => (
                    <AppCard key={payment.id} variant="default" style={styles.itemCard}>
                        <View style={styles.itemRow}>
                            <View style={[styles.itemIcon, { backgroundColor: '#FFF7ED' }]}>
                                <Ionicons name="wallet" size={20} color="#F59E0B" />
                            </View>
                            <View style={styles.itemInfo}>
                                <AppText variant="body" style={{ fontWeight: '600' }}>{payment.title}</AppText>
                                <AppText variant="caption">{payment.date}</AppText>
                            </View>
                            <AppText variant="h3" color={Colors.secondary.teal} style={{ fontSize: 15 }}>{payment.amount}</AppText>
                        </View>
                    </AppCard>
                ));
            case 3: // Referral
                return (
                    <View>
                        <AppCard style={styles.referralBanner}>
                            <LinearGradient
                                colors={Colors.gradients.teal as any}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.referralGradient}
                            >
                                <Ionicons name="gift" size={32} color="#FFF" />
                                <View style={{ flex: 1, marginLeft: 15 }}>
                                    <AppText variant="h3" color="#FFF">Invite & Earn Rewards</AppText>
                                    <AppText variant="caption" color="rgba(255,255,255,0.8)" style={{ marginTop: 4 }}>
                                        Refer 5 students → Free 10-min session{'\n'}
                                        Refer 1 teacher → Free webinar
                                    </AppText>
                                </View>
                            </LinearGradient>
                        </AppCard>
                        <TouchableOpacity
                            style={styles.referralLink}
                            onPress={() => router.push('/(student)/referral')}
                            activeOpacity={0.7}
                        >
                            <View style={[styles.itemIcon, { backgroundColor: Colors.secondary.aquaLight }]}>
                                <Ionicons name="share-social" size={20} color={Colors.secondary.teal} />
                            </View>
                            <AppText variant="body" style={{ flex: 1, marginLeft: 15, fontWeight: '600' }}>
                                Open Full Referral Page
                            </AppText>
                            <Ionicons name="chevron-forward" size={18} color={Colors.text.muted} />
                        </TouchableOpacity>
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
                        <AppText variant="h2" color="#FFFFFF">Account</AppText>
                        <View style={{ width: 44 }} />
                    </View>

                    <View style={styles.profileBox}>
                        <View style={styles.avatarWrapper}>
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&h=200&auto=format&fit=crop' }}
                                style={styles.avatar}
                            />
                            <TouchableOpacity style={styles.editBadge}>
                                <Ionicons name="camera" size={12} color="#FFF" />
                            </TouchableOpacity>
                        </View>
                        <AppText variant="h2" color="#FFF" style={{ marginTop: 15 }}>Ahmed Kashif</AppText>
                        <AppText variant="caption" color="rgba(255,255,255,0.6)">
                            Grade 12 <Ionicons name="ellipse" size={4} color="rgba(255,255,255,0.4)" /> Science Stream
                        </AppText>
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.statsRow}>
                    <AppCard style={styles.statBox}>
                        <AppText variant="h3">12</AppText>
                        <AppText variant="label" style={{ fontSize: 8 }}>CLASSES</AppText>
                    </AppCard>
                    <AppCard style={styles.statBox}>
                        <AppText variant="h3">45</AppText>
                        <AppText variant="label" style={{ fontSize: 8 }}>HOURS</AppText>
                    </AppCard>
                    <AppCard style={styles.statBox}>
                        <AppText variant="h3">4.9</AppText>
                        <AppText variant="label" style={{ fontSize: 8 }}>RATING</AppText>
                    </AppCard>
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
                            if (item.label === 'Logout') {
                                router.replace('/role-selection');
                            }
                        }}
                    >
                        <View style={[styles.menuIcon, { backgroundColor: item.color + '15' }]}>
                            <Ionicons name={item.icon as any} size={20} color={item.color} />
                        </View>
                        <AppText variant="body" style={styles.menuLabel}>{item.label}</AppText>
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
        width: 100,
        height: 100,
        borderRadius: 35,
        borderWidth: 4,
        borderColor: 'rgba(255,255,255,0.2)',
    },
    editBadge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: Colors.secondary.teal,
        borderWidth: 3,
        borderColor: Colors.primary.dark,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 25,
    },
    statsRow: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 25,
    },
    statBox: {
        flex: 1,
        alignItems: 'center',
        padding: 15,
        borderRadius: 20,
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
    progressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
    },
    progressBar: {
        flex: 1,
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
    referralLink: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border.light,
    },
    menuDivider: {
        height: 1,
        backgroundColor: Colors.border.default,
        marginVertical: 10,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border.light,
    },
    menuIcon: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuLabel: {
        flex: 1,
        marginLeft: 15,
        fontSize: 15,
        fontWeight: '500',
    },
});

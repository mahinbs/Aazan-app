import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '../../components/common/AppText';
import { Colors } from '../../constants/Colors';

export default function TeacherProfile() {
    const router = useRouter();

    const OPTIONS = [
        { icon: 'person', label: 'Public Profile', color: Colors.primary.blue },
        { icon: 'calendar', label: 'Availability Rules', color: Colors.secondary.teal },
        { icon: 'wallet', label: 'Payout Settings', color: Colors.accent.gold },
        { icon: 'shield-checkmark', label: 'Verification Status', color: '#10B981' },
        { icon: 'settings', label: 'Account Settings', color: '#6B7280' },
        { icon: 'log-out', label: 'Sign Out', color: Colors.status.error },
    ];

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

                {OPTIONS.map((item, index) => (
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
        paddingTop: 30,
    },
    badgeRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 15,
        marginBottom: 35,
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

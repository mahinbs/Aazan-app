import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppCard } from '../../components/common/AppCard';
import { AppText } from '../../components/common/AppText';
import { Colors } from '../../constants/Colors';

export default function StudentProfile() {
    const router = useRouter();

    const MENU_ITEMS = [
        { icon: 'book', label: 'My Courses', color: '#4F46E5' },
        { icon: 'time', label: 'Session History', color: '#10B981' },
        { icon: 'wallet', label: 'Payments', color: '#F59E0B' },
        { icon: 'settings', label: 'Settings', color: '#6B7280' },
        { icon: 'help-circle', label: 'Help Center', color: '#3B82F6' },
        { icon: 'log-out', label: 'Logout', color: '#EF4444' },
    ];

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
        paddingTop: 30,
    },
    statsRow: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 30,
    },
    statBox: {
        flex: 1,
        alignItems: 'center',
        padding: 15,
        borderRadius: 20,
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

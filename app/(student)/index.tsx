import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton } from '../../components/common/AppButton';
import { AppCard } from '../../components/common/AppCard';
import { AppText } from '../../components/common/AppText';
import { Colors } from '../../constants/Colors';

const CATEGORIES = [
    { id: '1', name: 'Math', icon: 'calculator', color: '#EEF2FF', iconColor: '#4F46E5' },
    { id: '2', name: 'Science', icon: 'flask', color: '#ECFDF5', iconColor: '#059669' },
    { id: '3', name: 'Coding', icon: 'code-slash', color: '#FFF7ED', iconColor: '#EA580C' },
    { id: '4', name: 'Business', icon: 'trending-up', color: '#F5F3FF', iconColor: '#7C3AED' },
];

const EXPERTS = [
    { id: '1', name: 'Dr. Sarah Wilson', subject: 'Advanced Physics', rating: 4.9, image: 'https://i.pravatar.cc/150?u=sarah', online: true },
    { id: '2', name: 'Prof. James Chen', subject: 'Calculus Specialist', rating: 4.8, image: 'https://i.pravatar.cc/150?u=james', online: true },
];

export default function StudentHome() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <LinearGradient colors={Colors.gradients.primary} style={styles.headerGradient}>
                <SafeAreaView edges={['top']}>
                    <View style={styles.header}>
                        <View style={styles.headerLeft}>
                            <AppText variant="h2" color="#FFFFFF">AZZAAN</AppText>
                            <AppText variant="caption" color="rgba(255,255,255,0.7)">Connect. Learn. Grow.</AppText>
                        </View>
                        <View style={styles.headerRight}>
                            <TouchableOpacity
                                style={styles.iconButton}
                                onPress={() => router.push('/(student)/forum')}
                            >
                                <Ionicons name="chatbubbles-outline" size={24} color="#FFFFFF" />
                                <View style={styles.badge} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => router.push('/(student)/profile')}>
                                <Image
                                    source={{ uri: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&h=200&auto=format&fit=crop' }}
                                    style={styles.avatar}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.searchWrapper}>
                        <AppCard variant="glass" style={styles.searchCard}>
                            <View style={styles.searchContainer}>
                                <Ionicons name="search" size={20} color="rgba(255,255,255,0.6)" />
                                <TextInput
                                    placeholder="Search subjects or experts..."
                                    style={styles.searchInput}
                                    placeholderTextColor="rgba(255,255,255,0.6)"
                                />
                                <TouchableOpacity style={styles.micButton}>
                                    <Ionicons name="mic" size={20} color="#FFFFFF" />
                                </TouchableOpacity>
                            </View>
                        </AppCard>
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* AI Scanner Banner */}
                <TouchableOpacity onPress={() => router.push('/(student)/ai-chat')}>
                    <AppCard style={styles.aiBanner}>
                        <LinearGradient
                            colors={['#1FB5A9', '#169C91']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.aiGradient}
                        >
                            <View style={styles.aiTextContainer}>
                                <AppText variant="h3" color="#FFFFFF">AI Smart Solve</AppText>
                                <AppText variant="caption" color="rgba(255,255,255,0.8)">
                                    Scan problem for instant clarity
                                </AppText>
                                <View style={styles.scanBadge}>
                                    <Ionicons name="scan" size={16} color="#1FB5A9" />
                                    <AppText variant="label" style={{ color: '#1FB5A9', fontSize: 10, marginLeft: 4 }}>TRY NOW</AppText>
                                </View>
                            </View>
                            <Image
                                source={require('../../assets/logo/azan-logo.png')}
                                style={styles.aiLogo}
                                contentFit="contain"
                            />
                        </LinearGradient>
                    </AppCard>
                </TouchableOpacity>

                {/* Categories */}
                <View style={styles.sectionHeader}>
                    <AppText variant="h3">Learning Paths</AppText>
                    <TouchableOpacity><AppText variant="caption" color={Colors.secondary.teal}>Custom Plan</AppText></TouchableOpacity>
                </View>
                <View style={styles.categoryGrid}>
                    {CATEGORIES.map((cat) => (
                        <TouchableOpacity key={cat.id} style={styles.categoryItem} activeOpacity={0.7}>
                            <View style={[styles.categoryIcon, { backgroundColor: cat.color }]}>
                                <Ionicons name={cat.icon as any} size={24} color={cat.iconColor} />
                            </View>
                            <AppText variant="label" weight="700" style={styles.categoryName}>{cat.name}</AppText>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Featured Experts */}
                <View style={styles.sectionHeader}>
                    <AppText variant="h3">Elite Tutors</AppText>
                    <TouchableOpacity onPress={() => router.push('/(student)/experts')}>
                        <AppText variant="caption" color={Colors.secondary.teal}>Explore All</AppText>
                    </TouchableOpacity>
                </View>
                {EXPERTS.map((expert) => (
                    <AppCard key={expert.id} variant="elevated" style={styles.expertCard}>
                        <View style={styles.expertRow}>
                            <View style={styles.avatarWrapper}>
                                <Image source={{ uri: expert.image }} style={styles.expertAvatar} />
                                {expert.online && <View style={styles.onlineStatus} />}
                            </View>
                            <View style={styles.expertInfo}>
                                <AppText variant="h3" style={{ fontSize: 16 }}>{expert.name}</AppText>
                                <AppText variant="caption">{expert.subject}</AppText>
                                <View style={styles.ratingRow}>
                                    <Ionicons name="star" size={14} color={Colors.accent.gold} />
                                    <AppText variant="label" style={{ marginLeft: 4 }}>{expert.rating}</AppText>
                                </View>
                            </View>
                            <AppButton
                                title="Connect"
                                type="tealGradient"
                                onPress={() => { }}
                                style={styles.smallConnectBtn}
                                textStyle={{ fontSize: 13 }}
                            />
                        </View>
                    </AppCard>
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
    headerGradient: {
        paddingBottom: 30,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 10,
        marginBottom: 20,
    },
    headerLeft: {
        flex: 1,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.3)',
    },
    iconButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(255,255,255,0.15)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    badge: {
        position: 'absolute',
        top: 12,
        right: 12,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: Colors.secondary.teal,
        borderWidth: 1.5,
        borderColor: Colors.primary.dark,
    },
    searchWrapper: {
        paddingHorizontal: 24,
    },
    searchCard: {
        padding: 4,
        borderRadius: 16,
        marginBottom: 0,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        paddingHorizontal: 15,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 15,
        color: '#FFFFFF',
    },
    micButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 30,
    },
    aiBanner: {
        padding: 0,
        borderRadius: 24,
        marginBottom: 30,
    },
    aiGradient: {
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    aiTextContainer: {
        flex: 1,
    },
    aiLogo: {
        width: 70,
        height: 70,
        opacity: 0.9,
    },
    scanBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
        marginTop: 12,
        alignSelf: 'flex-start',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    categoryGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 35,
    },
    categoryItem: {
        width: '22%',
        alignItems: 'center',
    },
    categoryIcon: {
        width: 60,
        height: 60,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    categoryName: {
        fontSize: 12,
        color: Colors.text.primary,
    },
    expertCard: {
        marginBottom: 15,
        borderRadius: 20,
    },
    expertRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarWrapper: {
        position: 'relative',
    },
    expertAvatar: {
        width: 56,
        height: 56,
        borderRadius: 18,
    },
    onlineStatus: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#10B981',
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    expertInfo: {
        flex: 1,
        marginLeft: 18,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    smallConnectBtn: {
        height: 40,
        width: 90,
    },
});

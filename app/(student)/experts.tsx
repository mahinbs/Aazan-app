import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton } from '../../components/common/AppButton';
import { AppCard } from '../../components/common/AppCard';
import { AppText } from '../../components/common/AppText';
import { Colors } from '../../constants/Colors';

const EXPERTS_LIST = [
    { id: '1', name: 'Dr. Sarah Wilson', subject: 'Physics', status: 'Online', price: '$1.5', rating: 4.9, bio: 'Expert in Quantum Mechanics and Astro Physics research.', image: 'https://i.pravatar.cc/150?u=sarah' },
    { id: '2', name: 'Prof. James Chen', subject: 'Mathematics', status: 'Online', price: '$2.0', rating: 4.8, bio: 'Specializing in Calculus, Linear Algebra and Data Science.', image: 'https://i.pravatar.cc/150?u=james' },
    { id: '3', name: 'Maria Rodriguez', subject: 'Chemistry', status: 'Offline', price: '$1.2', rating: 4.7, bio: 'Organic Chemistry research and teaching background.', image: 'https://i.pravatar.cc/150?u=maria' },
];

export default function ExpertDirectory() {
    const router = useRouter();

    const renderExpert = ({ item }: { item: typeof EXPERTS_LIST[0] }) => (
        <AppCard style={styles.card} variant="elevated">
            <View style={styles.cardHeader}>
                <View style={styles.avatarWrapper}>
                    <Image source={{ uri: item.image }} style={styles.avatar} />
                    <View style={[styles.statusDot, { backgroundColor: item.status === 'Online' ? Colors.status.success : Colors.text.muted }]} />
                </View>
                <View style={styles.headerInfo}>
                    <AppText variant="h3" style={{ fontSize: 17 }}>{item.name}</AppText>
                    <AppText variant="caption">{item.subject}</AppText>
                    <View style={styles.ratingRow}>
                        <Ionicons name="star" size={14} color={Colors.accent.gold} />
                        <AppText variant="label" style={{ marginLeft: 5 }}>{item.rating}</AppText>
                    </View>
                </View>
                <View style={styles.priceContainer}>
                    <AppText variant="h3" color={Colors.secondary.teal}>{item.price}</AppText>
                    <AppText variant="label" style={{ fontSize: 8 }}>/ MIN</AppText>
                </View>
            </View>

            <AppText variant="body" numberOfLines={2} style={styles.bio}>{item.bio}</AppText>

            <View style={styles.footer}>
                <AppButton
                    title={item.status === 'Online' ? 'Connect Now' : 'Join Waitlist'}
                    type={item.status === 'Online' ? 'tealGradient' : 'outline'}
                    onPress={() => { }}
                    style={styles.connectBtn}
                />
            </View>
        </AppCard>
    );

    return (
        <View style={styles.container}>
            <LinearGradient colors={Colors.gradients.primary} style={styles.topArea}>
                <SafeAreaView edges={['top']}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                            <Ionicons name="arrow-back" size={24} color="#FFF" />
                        </TouchableOpacity>
                        <View style={styles.headerText}>
                            <AppText variant="h2" color="#FFFFFF">Instant Experts</AppText>
                            <AppText variant="caption" color="rgba(255,255,255,0.6)">Connect with live educators</AppText>
                        </View>
                    </View>

                    <View style={styles.searchWrapper}>
                        <View style={styles.searchBar}>
                            <Ionicons name="search" size={20} color="rgba(255,255,255,0.6)" />
                            <TextInput
                                placeholder="Filter by subject or keyword..."
                                style={styles.searchInput}
                                placeholderTextColor="rgba(255,255,255,0.5)"
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <FlatList
                data={EXPERTS_LIST}
                renderItem={renderExpert}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
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
    searchWrapper: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 16,
        paddingHorizontal: 15,
        height: 50,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 15,
        color: '#FFF',
    },
    listContent: {
        padding: 24,
    },
    card: {
        marginBottom: 16,
        borderRadius: 24,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    avatarWrapper: {
        position: 'relative',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 20,
    },
    statusDot: {
        position: 'absolute',
        bottom: -2,
        right: -2,
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 3,
        borderColor: '#FFF',
    },
    headerInfo: {
        flex: 1,
        marginLeft: 15,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    priceContainer: {
        alignItems: 'center',
        backgroundColor: Colors.secondary.aquaLight,
        padding: 8,
        borderRadius: 12,
        minWidth: 50,
    },
    bio: {
        marginBottom: 20,
        color: Colors.text.secondary,
        lineHeight: 20,
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: Colors.border.light,
        paddingTop: 15,
    },
    connectBtn: {
        height: 48,
    },
});

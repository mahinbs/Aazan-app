import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton } from '../../components/common/AppButton';
import { AppCard } from '../../components/common/AppCard';
import { AppText } from '../../components/common/AppText';
import { Colors } from '../../constants/Colors';

const WEBINARS = [
    {
        id: '1',
        title: 'Advanced Calculus Masterclass',
        teacher: 'Prof. James Chen',
        date: 'Today, 4:00 PM',
        price: '$15',
        enrolled: '45/50',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: '2',
        title: 'Organic Chemistry Basics',
        teacher: 'Dr. Sarah Wilson',
        date: 'Tomorrow, 10:00 AM',
        price: 'FREE',
        enrolled: '120/200',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=400&auto=format&fit=crop',
    },
];

export default function StudentClassrooms() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#1E2A5A', '#243E8F']} style={styles.headerArea}>
                <SafeAreaView edges={['top']}>
                    <View style={styles.header}>
                        <AppText variant="h1" color="#FFF">Webinars</AppText>
                        <AppText variant="caption" color="rgba(255,255,255,0.6)">Learn in structured virtual classrooms</AppText>
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.tabContainer}>
                    <TouchableOpacity style={[styles.miniTab, styles.activeTab]}>
                        <AppText variant="label" style={{ color: '#FFF' }}>Upcoming</AppText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.miniTab}>
                        <AppText variant="label">My Enrollment</AppText>
                    </TouchableOpacity>
                </View>

                {WEBINARS.map((item) => (
                    <AppCard key={item.id} style={styles.webinarCard} variant="elevated">
                        <Image source={{ uri: item.image }} style={styles.cardImage} />
                        <View style={styles.cardContent}>
                            <View style={styles.tagRow}>
                                <View style={styles.liveTag}>
                                    <View style={styles.liveDot} />
                                    <AppText variant="label" color="#1FB5A9" style={{ fontSize: 9 }}>OPEN</AppText>
                                </View>
                                <AppText variant="h3" color={Colors.secondary.teal}>{item.price}</AppText>
                            </View>

                            <AppText variant="h3" style={styles.title}>{item.title}</AppText>

                            <View style={styles.teacherBar}>
                                <Ionicons name="person-circle-outline" size={16} color={Colors.text.muted} />
                                <AppText variant="caption" style={{ marginLeft: 6 }}>{item.teacher}</AppText>
                            </View>

                            <View style={styles.infoRow}>
                                <View style={styles.infoChip}>
                                    <Ionicons name="calendar-outline" size={12} color={Colors.primary.blue} />
                                    <AppText variant="label" style={styles.chipText}>{item.date}</AppText>
                                </View>
                                <View style={styles.infoChip}>
                                    <Ionicons name="people-outline" size={12} color={Colors.primary.blue} />
                                    <AppText variant="label" style={styles.chipText}>{item.enrolled}</AppText>
                                </View>
                            </View>

                            <AppButton
                                title="Reserve My Spot"
                                type="gradient"
                                onPress={() => { }}
                                style={styles.enrollBtn}
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
    headerArea: {
        paddingBottom: 20,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    header: {
        paddingHorizontal: 24,
        paddingTop: 10,
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 25,
    },
    tabContainer: {
        flexDirection: 'row',
        marginBottom: 25,
        gap: 12,
    },
    miniTab: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: Colors.background.card,
        borderWidth: 1,
        borderColor: Colors.border.light,
    },
    activeTab: {
        backgroundColor: Colors.primary.dark,
        borderColor: Colors.primary.dark,
    },
    webinarCard: {
        padding: 0,
        borderRadius: 24,
        marginBottom: 25,
    },
    cardImage: {
        width: '100%',
        height: 160,
    },
    cardContent: {
        padding: 24,
    },
    tagRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    liveTag: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        backgroundColor: Colors.secondary.aquaLight,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
    },
    liveDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: Colors.secondary.teal,
    },
    title: {
        fontSize: 19,
        marginBottom: 10,
    },
    teacherBar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    infoRow: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 20,
    },
    infoChip: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F1F5F9',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 10,
    },
    chipText: {
        marginLeft: 6,
        fontSize: 10,
        color: Colors.primary.dark,
    },
    enrollBtn: {
        height: 50,
    },
});

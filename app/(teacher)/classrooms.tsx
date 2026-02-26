import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton } from '../../components/common/AppButton';
import { AppCard } from '../../components/common/AppCard';
import { AppText } from '../../components/common/AppText';
import { Colors } from '../../constants/Colors';

const CLASSROOMS = [
    { id: '1', title: 'Calculus Advanced', date: 'Feb 26, 10:00 AM', enrolled: 15, status: 'Upcoming' },
    { id: '2', title: 'Physics Masterclass', date: 'Feb 28, 4:00 PM', enrolled: 45, status: 'Upcoming' },
];

export default function TeacherClassrooms() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <LinearGradient colors={Colors.gradients.primary} style={styles.topArea}>
                <SafeAreaView edges={['top']}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                            <Ionicons name="arrow-back" size={24} color="#FFF" />
                        </TouchableOpacity>
                        <View style={styles.headerText}>
                            <AppText variant="h2" color="#FFFFFF">Virtual Studios</AppText>
                            <AppText variant="caption" color="rgba(255,255,255,0.6)">Manage live learning sessions</AppText>
                        </View>
                        <TouchableOpacity style={styles.addBtn}>
                            <Ionicons name="add" size={28} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <AppCard style={styles.createCard} variant="elevated">
                    <AppText variant="h3" style={{ marginBottom: 15 }}>Schedule Live Session</AppText>
                    <View style={styles.inputGroup}>
                        <AppText variant="label" color={Colors.text.muted} style={{ marginBottom: 8 }}>Class Title</AppText>
                        <TextInput placeholder="e.g. Organic Chemistry Part 2" style={styles.input} />
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.inputGroup, { flex: 1 }]}>
                            <AppText variant="label" color={Colors.text.muted} style={{ marginBottom: 8 }}>Date & Time</AppText>
                            <TextInput placeholder="Select..." style={styles.input} />
                        </View>
                        <View style={[styles.inputGroup, { flex: 1 }]}>
                            <AppText variant="label" color={Colors.text.muted} style={{ marginBottom: 8 }}>Zoom Link</AppText>
                            <TextInput placeholder="Paste URL..." style={styles.input} />
                        </View>
                    </View>
                    <AppButton title="Create Studio" type="tealGradient" onPress={() => { }} />
                </AppCard>

                <View style={styles.sectionHeader}>
                    <AppText variant="h3">Active Studios</AppText>
                </View>

                {CLASSROOMS.map((cls) => (
                    <AppCard key={cls.id} variant="default" style={styles.classCard}>
                        <View style={styles.classRow}>
                            <View style={styles.classIcon}>
                                <Ionicons name="videocam" size={24} color={Colors.secondary.teal} />
                            </View>
                            <View style={styles.classInfo}>
                                <AppText variant="h3" style={{ fontSize: 16 }}>{cls.title}</AppText>
                                <AppText variant="caption">{cls.date}</AppText>
                            </View>
                            <View style={styles.attendance}>
                                <Ionicons name="people" size={14} color={Colors.text.muted} />
                                <AppText variant="label" style={{ marginLeft: 4 }}>{cls.enrolled}</AppText>
                            </View>
                        </View>
                        <View style={styles.cardFooter}>
                            <AppButton title="Start Session" type="gradient" onPress={() => { }} style={styles.smallBtn} textStyle={{ fontSize: 12 }} />
                            <AppButton title="Manage" type="outline" onPress={() => { }} style={styles.smallBtn} textStyle={{ fontSize: 12 }} />
                        </View>
                    </AppCard>
                ))}
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
        paddingBottom: 20,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
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
    addBtn: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: Colors.secondary.teal,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 25,
    },
    createCard: {
        borderRadius: 24,
        padding: 24,
        marginBottom: 35,
    },
    inputGroup: {
        marginBottom: 20,
    },
    input: {
        height: 50,
        backgroundColor: '#F8FAFC',
        borderRadius: 12,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: Colors.border.light,
        fontSize: 15,
        color: Colors.text.primary,
    },
    row: {
        flexDirection: 'row',
        gap: 15,
    },
    sectionHeader: {
        marginBottom: 15,
    },
    classCard: {
        borderRadius: 24,
        padding: 20,
        marginBottom: 15,
    },
    classRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    classIcon: {
        width: 48,
        height: 48,
        borderRadius: 16,
        backgroundColor: Colors.secondary.aquaLight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    classInfo: {
        flex: 1,
        marginLeft: 15,
    },
    attendance: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F1F5F9',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
    },
    cardFooter: {
        flexDirection: 'row',
        gap: 12,
        borderTopWidth: 1,
        borderTopColor: Colors.border.light,
        paddingTop: 15,
    },
    smallBtn: {
        flex: 1,
        height: 40,
        borderRadius: 10,
    },
});

import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppCard } from '../../components/common/AppCard';
import { AppText } from '../../components/common/AppText';
import { Colors } from '../../constants/Colors';

const POSTS = [
    {
        id: '1',
        user: 'Ahmed K.',
        subject: 'Physics',
        question: 'Why does light behave both as a wave and a particle in the double-slit experiment?',
        likes: 24,
        answers: 5,
        time: '2h ago',
        teacherAnswered: true,
        inputType: 'text',
    },
    {
        id: '2',
        user: 'Sara M.',
        subject: 'Calculus',
        question: 'Can someone explain the integration by parts formula in simple terms?',
        likes: 12,
        answers: 3,
        time: '5h ago',
        teacherAnswered: false,
        inputType: 'text',
    },
];

export default function CollaborativeForum() {
    const router = useRouter();
    const [questionText, setQuestionText] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [showAIDetection, setShowAIDetection] = useState(false);

    const handlePostQuestion = () => {
        if (!questionText.trim()) return;
        setShowAIDetection(true);
        setTimeout(() => setShowAIDetection(false), 5000);
        setQuestionText('');
    };

    const toggleRecording = () => {
        setIsRecording(!isRecording);
        if (!isRecording) {
            // Simulate voice-to-text after 2 seconds
            setTimeout(() => {
                setQuestionText('What is the Heisenberg uncertainty principle?');
                setIsRecording(false);
            }, 2000);
        }
    };

    return (
        <View style={styles.container}>
            <LinearGradient colors={Colors.gradients.primary} style={styles.topArea}>
                <SafeAreaView edges={['top']}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                            <Ionicons name="close" size={24} color="#FFF" />
                        </TouchableOpacity>
                        <View style={styles.headerText}>
                            <AppText variant="h2" color="#FFFFFF">Public Forum</AppText>
                            <AppText variant="caption" color="rgba(255,255,255,0.6)">Collaborative Learning</AppText>
                        </View>
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <AppCard style={styles.postInputCard} variant="elevated">
                    <View style={styles.inputRow}>
                        <Image source={{ uri: 'https://i.pravatar.cc/150?u=student' }} style={styles.miniAvatar} />
                        <TextInput
                            placeholder="What is your academic question?"
                            style={styles.input}
                            placeholderTextColor={Colors.text.muted}
                            value={questionText}
                            onChangeText={setQuestionText}
                            multiline
                        />
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.inputFooter}>
                        <TouchableOpacity style={styles.mediaBtn}>
                            <Ionicons name="image-outline" size={20} color={Colors.primary.blue} />
                            <AppText variant="label" style={{ marginLeft: 6, fontSize: 10 }}>PHOTO</AppText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.mediaBtn}>
                            <Ionicons name="attach" size={20} color={Colors.primary.blue} />
                            <AppText variant="label" style={{ marginLeft: 6, fontSize: 10 }}>PDF</AppText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.mediaBtn, isRecording && styles.recordingBtn]}
                            onPress={toggleRecording}
                        >
                            <Ionicons
                                name={isRecording ? 'radio-button-on' : 'mic'}
                                size={20}
                                color={isRecording ? '#EF4444' : Colors.primary.blue}
                            />
                            <AppText
                                variant="label"
                                style={{ marginLeft: 6, fontSize: 10 }}
                                color={isRecording ? '#EF4444' : undefined}
                            >
                                {isRecording ? 'REC...' : 'VOICE'}
                            </AppText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.askBtn} onPress={handlePostQuestion}>
                            <AppText variant="label" color="#FFF" style={{ fontSize: 10 }}>POST QUESTION</AppText>
                        </TouchableOpacity>
                    </View>
                </AppCard>

                {/* AI Subject Detection Banner */}
                {showAIDetection && (
                    <AppCard style={styles.aiDetectionCard}>
                        <LinearGradient
                            colors={Colors.gradients.teal}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.aiDetectionGradient}
                        >
                            <View style={styles.aiDetectionContent}>
                                <View style={styles.aiDetectionIcon}>
                                    <Ionicons name="sparkles" size={18} color={Colors.secondary.teal} />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <AppText variant="label" color="#FFF" style={{ fontSize: 11 }}>
                                        AAZAAN AI DETECTED
                                    </AppText>
                                    <AppText variant="body" color="#FFF" style={{ fontSize: 13, marginTop: 2 }}>
                                        Subject: Physics • 3 experts recommended
                                    </AppText>
                                </View>
                                <TouchableOpacity style={styles.viewExpertsBtn}>
                                    <AppText variant="label" color={Colors.secondary.teal} style={{ fontSize: 10 }}>
                                        VIEW
                                    </AppText>
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                    </AppCard>
                )}

                <View style={styles.filterRow}>
                    <TouchableOpacity style={[styles.filterChip, styles.activeChip]}>
                        <AppText variant="label" color="#FFF" style={{ fontSize: 10 }}>TRENDING</AppText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterChip}>
                        <AppText variant="label" style={{ fontSize: 10 }}>LATEST</AppText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterChip}>
                        <AppText variant="label" style={{ fontSize: 10 }}>MY QUESTIONS</AppText>
                    </TouchableOpacity>
                </View>

                {POSTS.map((post) => (
                    <AppCard key={post.id} variant="default" style={styles.postCard}>
                        <View style={styles.postHeader}>
                            <AppText variant="label" color={Colors.secondary.teal}>{post.subject}</AppText>
                            <AppText variant="caption">{post.time}</AppText>
                        </View>
                        <AppText variant="h3" style={styles.questionText}>{post.question}</AppText>
                        <View style={styles.postFooter}>
                            <View style={styles.userRow}>
                                <Image source={{ uri: `https://i.pravatar.cc/150?u=${post.user}` }} style={styles.userAvatar} />
                                <AppText variant="caption" style={{ marginLeft: 8 }}>{post.user}</AppText>
                            </View>
                            <View style={styles.statRow}>
                                <View style={styles.stat}>
                                    <Ionicons name="heart-outline" size={16} color={Colors.text.muted} />
                                    <AppText variant="caption" style={{ marginLeft: 4 }}>{post.likes}</AppText>
                                </View>
                                <View style={styles.stat}>
                                    <Ionicons name="chatbubble-outline" size={16} color={Colors.text.muted} />
                                    <AppText variant="caption" style={{ marginLeft: 4 }}>{post.answers}</AppText>
                                </View>
                                {post.teacherAnswered && (
                                    <View style={styles.teacherBadge}>
                                        <Ionicons name="ribbon" size={14} color="#FFF" />
                                    </View>
                                )}
                            </View>
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
    scrollContent: {
        paddingHorizontal: 24,
        paddingVertical: 25,
    },
    postInputCard: {
        borderRadius: 24,
        padding: 20,
        marginBottom: 20,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    miniAvatar: {
        width: 40,
        height: 40,
        borderRadius: 14,
    },
    input: {
        flex: 1,
        marginLeft: 15,
        fontSize: 15,
        color: Colors.text.primary,
        maxHeight: 80,
    },
    divider: {
        height: 1,
        backgroundColor: Colors.border.light,
        marginBottom: 15,
    },
    inputFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        flexWrap: 'wrap',
    },
    mediaBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F1F5F9',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
    },
    recordingBtn: {
        backgroundColor: '#FEE2E2',
    },
    askBtn: {
        marginLeft: 'auto',
        backgroundColor: Colors.primary.blue,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 10,
    },
    aiDetectionCard: {
        padding: 0,
        borderRadius: 20,
        marginBottom: 20,
        overflow: 'hidden',
    },
    aiDetectionGradient: {
        padding: 16,
    },
    aiDetectionContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    aiDetectionIcon: {
        width: 36,
        height: 36,
        borderRadius: 12,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewExpertsBtn: {
        backgroundColor: '#FFF',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
    },
    filterRow: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 25,
    },
    filterChip: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
        backgroundColor: Colors.background.card,
        borderWidth: 1,
        borderColor: Colors.border.light,
    },
    activeChip: {
        backgroundColor: Colors.primary.dark,
        borderColor: Colors.primary.dark,
    },
    postCard: {
        borderRadius: 24,
        padding: 24,
        marginBottom: 15,
    },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    questionText: {
        fontSize: 17,
        lineHeight: 24,
        marginBottom: 20,
    },
    postFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userAvatar: {
        width: 32,
        height: 32,
        borderRadius: 10,
    },
    statRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    stat: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    teacherBadge: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: Colors.secondary.teal,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

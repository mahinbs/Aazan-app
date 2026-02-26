import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppCard } from '../../components/common/AppCard';
import { AppText } from '../../components/common/AppText';
import { Colors } from '../../constants/Colors';

const MOCK_MESSAGES = [
    { id: '1', text: 'Hello! I am AAZA AI. How can I assist your learning today?', sender: 'ai' },
    { id: '2', text: 'Can you help me solve this calculus integral?', sender: 'user' },
    { id: '3', text: 'Of course! Please upload a photo or type the equation here.', sender: 'ai' },
];

export default function AIChat() {
    const [messages, setMessages] = useState(MOCK_MESSAGES);
    const [inputText, setInputText] = useState('');
    const router = useRouter();

    const handleSend = () => {
        if (!inputText.trim()) return;
        const newMessage = { id: Date.now().toString(), text: inputText, sender: 'user' };
        setMessages([...messages, newMessage]);
        setInputText('');
    };

    return (
        <View style={styles.container}>
            <LinearGradient colors={Colors.gradients.teal} style={styles.topArea}>
                <SafeAreaView edges={['top']}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                            <Ionicons name="arrow-back" size={24} color="#FFF" />
                        </TouchableOpacity>
                        <View style={styles.headerText}>
                            <AppText variant="h2" color="#FFFFFF">AAZA AI</AppText>
                            <AppText variant="caption" color="rgba(255,255,255,0.8)">24/7 Intelligent Tutor</AppText>
                        </View>
                        <TouchableOpacity style={styles.historyBtn}>
                            <Ionicons name="time-outline" size={24} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <ScrollView contentContainerStyle={styles.chatContent} showsVerticalScrollIndicator={false}>
                {messages.map((msg) => (
                    <View key={msg.id} style={[styles.messageWrapper, msg.sender === 'user' ? styles.userWrapper : styles.aiWrapper]}>
                        <AppCard
                            variant={msg.sender === 'user' ? 'navy' : 'default'}
                            style={[styles.messageBubble, msg.sender === 'user' ? styles.userBubble : styles.aiBubble]}
                        >
                            <AppText
                                variant="body"
                                color={msg.sender === 'user' ? '#FFF' : Colors.text.primary}
                                style={{ fontSize: 15 }}
                            >
                                {msg.text}
                            </AppText>
                        </AppCard>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.inputArea}>
                <AppCard variant="elevated" style={styles.inputCard}>
                    <View style={styles.inputRow}>
                        <TouchableOpacity style={styles.scanBtn}>
                            <Ionicons name="scan" size={22} color={Colors.secondary.teal} />
                        </TouchableOpacity>
                        <TextInput
                            placeholder="Ask or scan a problem..."
                            style={styles.input}
                            value={inputText}
                            onChangeText={setInputText}
                            placeholderTextColor={Colors.text.muted}
                        />
                        <TouchableOpacity
                            style={[styles.sendBtn, !inputText.trim() && styles.sendBtnDisabled]}
                            onPress={handleSend}
                            disabled={!inputText.trim()}
                        >
                            <LinearGradient colors={['#1FB5A9', '#169C91']} style={styles.sendGradient}>
                                <Ionicons name="paper-plane" size={20} color="#FFF" />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </AppCard>
                <SafeAreaView edges={['bottom']} />
            </View>
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
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        flex: 1,
    },
    historyBtn: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chatContent: {
        padding: 24,
        paddingBottom: 100,
    },
    messageWrapper: {
        width: '100%',
        marginBottom: 10,
        flexDirection: 'row',
    },
    userWrapper: {
        justifyContent: 'flex-end',
    },
    aiWrapper: {
        justifyContent: 'flex-start',
    },
    messageBubble: {
        maxWidth: '80%',
        padding: 15,
        borderRadius: 20,
        marginBottom: 0,
    },
    userBubble: {
        borderBottomRightRadius: 4,
    },
    aiBubble: {
        borderBottomLeftRadius: 4,
    },
    inputArea: {
        paddingHorizontal: 20,
        paddingBottom: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    inputCard: {
        padding: 6,
        borderRadius: 20,
        marginBottom: 0,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 54,
    },
    scanBtn: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        marginHorizontal: 10,
        fontSize: 15,
        color: Colors.text.primary,
    },
    sendBtn: {
        width: 44,
        height: 44,
        borderRadius: 14,
        overflow: 'hidden',
    },
    sendGradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendBtnDisabled: {
        opacity: 0.5,
    },
});

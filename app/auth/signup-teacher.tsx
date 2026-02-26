import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton } from '../../components/common/AppButton';
import { AppCard } from '../../components/common/AppCard';
import { AppText } from '../../components/common/AppText';
import { Colors } from '../../constants/Colors';

export default function ProfessionalSignup() {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [bio, setBio] = useState('');
    const [expertise, setExpertise] = useState('');

    return (
        <View style={styles.container}>
            <LinearGradient colors={Colors.gradients.primary} style={styles.topArea}>
                <SafeAreaView edges={['top']}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                        <Ionicons name="arrow-back" size={24} color="#FFF" />
                    </TouchableOpacity>
                    <View style={styles.header}>
                        <AppText variant="h2" color="#FFF" style={styles.title}>Expert Onboarding</AppText>
                        <AppText variant="caption" color="rgba(255,255,255,0.7)">Join our elite academic ecosystem</AppText>
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <AppCard variant="elevated" style={styles.formCard}>
                    <View style={styles.inputGroup}>
                        <AppText variant="label" style={styles.label}>FULL NAME & TITLE</AppText>
                        <TextInput
                            value={fullName}
                            onChangeText={setFullName}
                            placeholder="Dr. John Doe"
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <AppText variant="label" style={styles.label}>PROFESSIONAL EMAIL</AppText>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="john@faculty.edu"
                            style={styles.input}
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <AppText variant="label" style={styles.label}>PRIMARY EXPERTISE (e.g. Mathematics)</AppText>
                        <TextInput
                            value={expertise}
                            onChangeText={setExpertise}
                            placeholder="Theoretical Physics"
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <AppText variant="label" style={styles.label}>PROFESSIONAL BIO</AppText>
                        <TextInput
                            value={bio}
                            onChangeText={setBio}
                            placeholder="Describe your academic background and research..."
                            style={[styles.input, styles.textArea]}
                            multiline
                            numberOfLines={4}
                        />
                    </View>

                    <AppButton
                        title="Submit Credentials"
                        type="gradient"
                        onPress={() => router.replace('/(teacher)')}
                        style={styles.submitBtn}
                    />
                </AppCard>
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
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    backBtn: {
        marginLeft: 20,
        marginTop: 10,
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: 'rgba(255,255,255,0.15)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        marginTop: 10,
    },
    title: {
        fontSize: 24,
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 40,
    },
    formCard: {
        padding: 25,
        borderRadius: 24,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 10,
        marginBottom: 8,
        color: Colors.text.muted,
        fontWeight: '700',
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.border.default,
        borderRadius: 14,
        paddingHorizontal: 15,
        height: 52,
        backgroundColor: '#F8FAFC',
        fontSize: 15,
        color: Colors.text.primary,
    },
    textArea: {
        height: 100,
        paddingTop: 15,
        textAlignVertical: 'top',
    },
    submitBtn: {
        marginTop: 15,
    },
});

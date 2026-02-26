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

export default function StudentSignup() {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [grade, setGrade] = useState('');

    return (
        <View style={styles.container}>
            <LinearGradient colors={Colors.gradients.primary} style={styles.topArea}>
                <SafeAreaView edges={['top']}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                        <Ionicons name="arrow-back" size={24} color="#FFF" />
                    </TouchableOpacity>
                    <View style={styles.header}>
                        <AppText variant="h2" color="#FFF" style={styles.title}>Student Registration</AppText>
                        <AppText variant="caption" color="rgba(255,255,255,0.7)">Start your learning journey</AppText>
                    </View>
                </SafeAreaView>
            </LinearGradient>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <AppCard variant="elevated" style={styles.formCard}>
                    <View style={styles.inputGroup}>
                        <AppText variant="label" style={styles.label}>FULL NAME</AppText>
                        <TextInput
                            value={fullName}
                            onChangeText={setFullName}
                            placeholder="John Doe"
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <AppText variant="label" style={styles.label}>EMAIL ADDRESS</AppText>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="john@example.com"
                            style={styles.input}
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <AppText variant="label" style={styles.label}>GRADE / LEVEL</AppText>
                        <TextInput
                            value={grade}
                            onChangeText={setGrade}
                            placeholder="e.g. Grade 12"
                            style={styles.input}
                        />
                    </View>

                    <AppButton
                        title="Create Student Account"
                        type="gradient"
                        onPress={() => router.replace('/(student)')}
                        style={styles.submitBtn}
                    />
                </AppCard>
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
    submitBtn: {
        marginTop: 15,
    },
});

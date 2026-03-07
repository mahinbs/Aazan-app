import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { AppButton } from '../components/common/AppButton';
import { AppText } from '../components/common/AppText';
import { Colors } from '../constants/Colors';

const { width, height } = Dimensions.get('window');

const ONBOARDING_DATA = [
    {
        id: '1',
        title: 'Instant Academic Support\nin Seconds',
        description: 'Connect with elite subject matter experts for real-time clarity and academic growth.',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: '2',
        title: 'Master Your Studies\nwith Smart AI',
        description: 'Our Aazaan AI understands text, audio, and visual problems to provide instant, precise solutions.',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: '3',
        title: 'A Global Ecosystem\nfor Learning',
        description: 'Join virtual classrooms, attend exclusive webinars, and scale your potential globally.',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop',
    },
];

export default function Onboarding() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);
    const router = useRouter();

    const handleNext = () => {
        if (currentIndex < ONBOARDING_DATA.length - 1) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        } else {
            router.push('/role-selection');
        }
    };

    const renderItem = ({ item }: { item: typeof ONBOARDING_DATA[0] }) => (
        <View style={styles.slide}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.image} contentFit="cover" />
                <LinearGradient
                    colors={['transparent', 'rgba(30, 42, 90, 0.8)']}
                    style={styles.overlay}
                />
            </View>
            <View style={styles.content}>
                <AppText variant="display" style={styles.title}>{item.title}</AppText>
                <AppText variant="body" style={styles.description}>{item.description}</AppText>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={ONBOARDING_DATA}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(e) => {
                    const index = Math.round(e.nativeEvent.contentOffset.x / width);
                    setCurrentIndex(index);
                }}
                keyExtractor={(item) => item.id}
            />

            <View style={styles.footer}>
                <View style={styles.pagination}>
                    {ONBOARDING_DATA.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                currentIndex === index && styles.activeDot,
                            ]}
                        />
                    ))}
                </View>

                <AppButton
                    title={currentIndex === ONBOARDING_DATA.length - 1 ? "Let's Get Started" : "Continue"}
                    onPress={handleNext}
                    type="gradient"
                    style={styles.button}
                />

                <TouchableOpacity onPress={() => router.push('/role-selection')} style={styles.skipButton}>
                    <AppText variant="label" style={styles.skipText}>Skip introduction</AppText>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background.main,
    },
    slide: {
        width,
        flex: 1,
    },
    imageContainer: {
        width,
        height: height * 0.58,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
    content: {
        flex: 1,
        backgroundColor: Colors.background.main,
        marginTop: -50,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 40,
        paddingTop: 45,
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        marginBottom: 16,
        color: Colors.primary.dark,
        fontSize: 30,
    },
    description: {
        textAlign: 'center',
        color: Colors.text.secondary,
        paddingHorizontal: 10,
        lineHeight: 22,
    },
    footer: {
        paddingHorizontal: 30,
        paddingBottom: 50,
        backgroundColor: Colors.background.main,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 35,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: Colors.border.default,
        marginHorizontal: 5,
    },
    activeDot: {
        width: 30,
        backgroundColor: Colors.secondary.teal,
    },
    button: {
        width: '100%',
        height: 56,
    },
    skipButton: {
        marginTop: 25,
        alignSelf: 'center',
    },
    skipText: {
        color: Colors.text.muted,
        fontSize: 11,
    },
});

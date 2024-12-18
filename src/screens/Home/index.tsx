import { Text, View, Image, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function Home(){
    function handleParticpantAdd(){
        
    }
    return(
        <View style={styles.container}>
            <Image 
                source={require('../../assets/logo.png')} 
                style={styles.logo}
/>
            <View style={styles.form}>
                    <TextInput 
                    style={styles.input}
                    placeholder="Nome do Participante"
                    placeholderTextColor={"#6B6B6B"}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleParticpantAdd}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.row}>
            <View style={styles.infoContainer}>
            <Text style={styles.titleCriadas}>Criadas</Text>
            <View style={styles.counter}>
                <Text style={styles.counterText}>0</Text>
            </View>
            </View>

            <View style={styles.infoContainer}>
            <Text style={styles.titleConcluidas}>Concluídas</Text>
            <View style={styles.counter}>
                <Text style={styles.counterText}>0</Text>
            </View>
            </View>
            </View>
        
            <View style={styles.divider} />
            <View style={styles.messageContainer}>
                <Image
                    source={require('../../assets/Clipboard.png')}
                    style={styles.icon}
                />
                <Text style={styles.messageTitle}>
                    Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.messageSubtitle}>
                    Crie tarefas e organize seus itens a fazer
                </Text>
            </View>
            
        </View>
    );
}
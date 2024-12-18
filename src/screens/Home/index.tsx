import { Text, View, Image, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function Home(){

interface Task {
    id: string;
    name: string;
    completed: boolean;
  }
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");
  const createdCount = tasks.length;
  const completedCount = tasks.filter((task) => task.completed).length;
    function handleTaskAdd() {
        if (taskName.trim() === "") return;
    
        const newTask = {
          id: String(new Date().getTime()),
          name: taskName,
          completed: false,
        };
    setTasks((prevState) => [...prevState, newTask]);
    setTaskName("");
    }  
    function handleTaskRemove(id: string) {
        setTasks((prevState) => prevState.filter((task) => task.id !== id));
      }
    
    function handleTaskToggle(id: string) {
        setTasks((prevState) =>
          prevState.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          )
    );
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
                    placeholder="Nome da tarefa"
                    placeholderTextColor="#6B6B6B"
                    value={taskName}
                    onChangeText={setTaskName}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                    <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            <View style={styles.row}>
            <View style={styles.infoContainer}>
            <Text style={styles.titleCriadas}>Criadas</Text>
                <View style={styles.counter}>
                    <Text style={styles.counterText}>{createdCount}</Text>
                </View>
            </View>

            <View style={styles.infoContainer}>
            <Text style={styles.titleConcluidas}>Concluídas</Text>
                <View style={styles.counter}>
                    <Text style={styles.counterText}>{completedCount}</Text>
                </View>
            </View>
        </View>
        
        <View style={styles.divider} />
            
        <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <TouchableOpacity onPress={() => handleTaskToggle(item.id)}>
              <View
                style={[
                  styles.circle,
                  item.completed && styles.circleCompleted,
                ]}
              >
                {item.completed && (
                  <Text style={styles.checkmark}>✓</Text>
                )}
              </View>
            </TouchableOpacity>

            <Text
              style={[
                styles.taskText,
                item.completed && styles.taskTextCompleted,
              ]}
            >
              {item.name}
            </Text>

            <TouchableOpacity onPress={() => handleTaskRemove(item.id)}>
              <Image
                source={require("../../assets/trash.png")}
                style={styles.trashIcon}
              />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.messageContainer}>
            <Image
              source={require("../../assets/Clipboard.png")}
              style={styles.icon}
            />
            <Text style={styles.messageTitle}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.messageSubtitle}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      /> 
        </View>
    );
}
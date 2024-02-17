use chrono::prelude::*;
#[derive(Debug)]

struct TimeManager;

impl TimeManager {
    pub fn get_current_datetime() -> String{
        let utc_now = Utc::now();

        utc_now.format("%Y-%m-%d %H:%M:%S").to_string()
    }
}
#[derive(Debug)]
struct Todo {
    title: String,
    completed: bool,
    created_at: String,
    updated_at: Option<String>
}

impl Todo {
    fn new(title: String) -> Todo {
        Todo {
            title,
            completed: false,
            created_at: TimeManager::get_current_datetime(),
            updated_at: None,
        }
    }

    fn complete(self) -> Todo {
        Todo {
            title: self.title,
            created_at: self.created_at,
            completed: true,
            updated_at: self.updated_at,
        }
    }

    fn update(self, new_title: String) -> Todo {
        Todo {
            title: new_title,
            completed: self.completed,
            created_at: self.created_at,
            updated_at: Some(TimeManager::get_current_datetime())
        }
    }

}

#[derive(Debug)]
struct TodoManager {
    todos: Vec<Todo>
}

impl TodoManager {
    fn new() -> TodoManager{
        TodoManager { todos: Vec::new() }
    }

    fn add(&mut self, title: String) {
      &self.todos.push(Todo::new(title));  
    }
}
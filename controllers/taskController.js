
export const createTask = async (req, res) => {
    return res.json({message:'I am post body'});
};

export const readTask = async (req, res) => {
    return res.json({message: 'Hello World'});
};

export const updateTask = async (req, res) => {
    return res.json({message: 'Task updated successfully.'});
};
export const deleteTask = async (req, res) => {
    return res.json({message: 'Task deleted successfully.'});
};

export const createToken = async (req, res) => {
    const payload = {
        username: 'Masud',
        role: 'user'}
}

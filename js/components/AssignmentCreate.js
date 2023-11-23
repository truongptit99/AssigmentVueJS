export default {
    template:
    /* html */
    `
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black flex">
                <input placeholder="New assignment..." class="p-2" v-model="newAssignment"/>
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form>
    `,
    data() {
        return {
            newAssignment: ''
        }
    },
    props: {
        assignments: Array
    },
    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        }
    }
}
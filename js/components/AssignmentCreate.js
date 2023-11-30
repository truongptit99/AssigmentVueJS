export default {
    template:
    /* html */
    `
        <form @submit.prevent="addEvent">
            <div class="border border-gray-600 text-black flex">
                <input placeholder="New assignment..." class="p-2 w-4/5" v-model="newAssignment"/>
                <button type="submit" class="bg-white p-2 border-l w-1/5">Add</button>
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
        addEvent() {
            this.$emit('addAssign', this.newAssignment);
            this.newAssignment = '';
        }
    }
}
import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {
        AssignmentList,
        AssignmentCreate
    },
    template:
    /* html */
    `
        <section class="flex gap-8">
            <assignment-list :assignments="filters.inProgress" title="In progress">
                <assignment-create :assignments="assignments" @add="addNew"></assignment-create>
            </assignment-list>
            <div v-show="showCompleted">
                <assignment-list
                    :assignments="filters.completed"
                    title="Completed"
                    can-toggle
                    @toggle="showCompleted = !showCompleted"
                ></assignment-list>            
            </div>
        </section>
    `,
    data() {
        return {
            greeting: 'Hello World',
            buttonClasses: 'text-green',
            active: false,
            assignments: [
                // { name: 'Finish project', complete: false, id: 1, tag: 'math' },
                // { name: 'Read Chapter 4', complete: false, id: 2, tag: 'science' },
                // { name: 'Turn in Homework', complete: false, id: 3, tag: 'math' },
            ],
            showCompleted: true
        }
    },
    computed: {
        // inProgressAssignments() {
        //     return this.assignments.filter(assignment => !assignment.complete);
        // },
        // completedAssignments() {
        //     return this.assignments.filter(assignment => assignment.complete);
        // },
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    },
    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            })
    },
    methods: {
        addNew(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1,
                tag: 'new'
            });
        }
    }
}

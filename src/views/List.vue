<template>
    <div class="liste">
        <table class="tstacked"  v-if="data && data.length > 0">
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Vorname</th>
                <th>Strasse</th>
                <th>PLZ</th>
                <th>Ort</th>
                <th>Email</th>
                <th>Telefon privat</th>
                <th>Telefon gesch.</th>
            </tr>
            </thead>
            <tbody>

            <tr  v-for="element in data" :key="element.kid">
                <td data-label="Löschen">
                    <a href="#" @click="deleteKontakt(element)"><font-awesome-icon icon="trash"/></a>
                </td>
                <td data-label="Name">{{element.name}}</td>
                <td data-label="Vorname">{{element.vorname}}</td>
                <td data-label="Strasse">{{element.strasse}}</td>
                <td data-label="PLZ">{{element.plz}}</td>
                <td data-label="Ort">{{element.ort}}</td>
                <td data-label="Email">{{element.email}}</td>
                <td data-label="Telefon privat">{{element.tpriv}}</td>
                <td data-label="Telefon gesch.">{{element.tgesch}}</td>
            </tr>
            </tbody>
        </table>
        <p  v-else> Keine Einträge...</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: undefined
            }
        },
        created() {

            this.axios.post('/api/index.php',
                {
                    id: 'liste',
                    func: 'lesen'
                }
            )
                .then( ({data}) => {
                    this.data = data.data;
                    // eslint-disable-next-line no-console
                    console.log(data);
                })
                .catch( (error) => {

                  // eslint-disable-next-line no-console
                    console.log(error);

                });
        },
        methods: {
            deleteKontakt(element) {
              this.axios.post('/api/index.php',
                      {
                        id: 'liste',
                        func: 'loeschen',
                        kid: element.kid
                      }
              )
            }
        },
        computed: {
            checkData() {
                return this.data.length;
            }
        }

    }

</script>
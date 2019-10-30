<template>
    <div class="kontakte">
        <form @submit.prevent>
            <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">Name(*)</label>
                <div class="col-sm-10">
                    <input :class="cssStyle.name" type="text" id="name" name="name" v-model="kontakt.name">
                </div>
            </div>
            <div class="form-group row">
                <label for="vorname" class="col-sm-2 col-form-label">Vorname(*)</label>
                <div class="col-sm-10">
                    <input :class="cssStyle.vorname" type="text" id="vorname" name="vorname" v-model="kontakt.vorname">
                </div>
            </div>
            <div class="form-group row">
                <label for="vorname" class="col-sm-2 col-form-label">Strasse</label>
                <div class="col-sm-10">
                    <input class="form-control" type="text" id="strasse" name="strasse" v-model="kontakt.strasse">
                </div>
            </div>
            <div class="form-group row">
                <label for="plz" class="col-sm-2 col-form-label">Plz</label>
                <div class="col-sm-2">
                    <input class="form-control" type="text" id="plz" name="plz" v-model="kontakt.plz">
                </div>
                <label for="ort" class="col-sm-2 col-form-label">Ort</label>
                <div class="col-sm-6">
                    <input class="form-control" type="text" id="ort" name="ort" v-model="kontakt.ort">
                </div>
            </div>
            <div class="form-group row">
                <label for="email" class="col-sm-2 col-form-label">Email(*)</label>
                <div class="col-sm-10">
                    <input :class="cssStyle.email" type="email" id="email" name="email" v-model="kontakt.email">
                </div>
            </div>
            <div class="form-group row">
                <label for="telpriv" class="col-sm-2 col-form-label">Telefon Privat</label>
                <div class="col-sm-10">
                    <input class="form-control" type="text" id="telpriv" name="tpriv" v-model="kontakt.tpriv">
                </div>
            </div>
            <div class="form-group row">
                <label for="telgesch" class="col-sm-2 col-form-label">Telefon Gesch�ft</label>
                <div class="col-sm-10">
                    <input class="form-control" type="text" id="telgesch" name="tgesch" v-model="kontakt.tgesch">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-auto">
                  <button class="btn btn-outline-secondary" @click="senden">senden</button>
                  <button class="btn btn-outline-secondary" @click="abbrechen">abbrechen</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script src="./Contacts.css"></script>
<script src="./Contacts.js"></script>
<script>
  export default {
    data() {
      return {
        kontakt: {name: "", vorname: "", strasse: "", plz:"", ort: "", email:"", tpriv:"", tgesch:"" },
        cssStyle: {name: "form-control", vorname: "form-control", email: "form-control"}
      }
    },

    methods: {
      senden(){
        this.axios.post("/api/index.php",
          {
            id: "kontakt",
            func: "speichern",
            kontakt: this.kontakt
          }
        )
      },
      abbrechen(){

      }
    }

  }



</script>
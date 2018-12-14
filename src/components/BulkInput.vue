<template>
  <div id="BulkInput" class="subjects-content">
    <h3 class="subjects-trimester-title">Inventory Management System</h3>
    <h4 class="subjects-trimester-title">Stock Taking</h4>

    <div class="self-evaluation-rows">
      Number of Rows: &nbsp;
      <input
        v-model.number="rownum"
        type="number"
        min="1"
        max="10"
        name="rows"
        class="rows-textbox"
      />
      <div
        class="btn btn-blueviolet btn-inline-block btn-create"
        @click="addRow(rownum);"
        v-show="rows.length < 10"
      >
        Add Row
      </div>
    </div>

    <div class="box-body box-self-evaluation">
      <table id="StockTable" class="table table-hover table-striped sortable">
        <thead>
          <tr>
            <th>Event Date</th>
            <th>Product Name</th>
            <th>Packing</th>
            <th>Market Price</th>
            <th>In/Out</th>
            <th>Expired By</th>
            <th>Used By</th>
            <th>Store Location</th>
            <th>Store Section</th>
            <th>Special Requirements</th>
            <th>Remarks</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="row in rows">
            <!-- Event Date -->
            <td><datepicker :value="row.eventdate"></datepicker></td>
            <td>
              <!-- product Name -->
              <select v-model="row.productname">
                <option>- - - -</option
                ><br />
                <option value="CHICKEN">Chicken</option>
                <option value="BEEF">Beef</option>
              </select>
            </td>
            <td>
              <!-- Packing -->
              <select v-model="row.packing">
                <option>- - - -</option
                ><br />
                <option value="20">20kg per pack</option>
                <option value="10">10 kg per pack</option>
              </select>
            </td>
            <td>
              <!-- Market Price -->
              <input type="text" name="price" v-model="row.price" />
            </td>
            <td>
              <!-- In/Out Toggle -->
              <div class="switches">
                <toggle-button
                  :value="true"
                  :labels="{ checked: 'IN', unchecked: 'OUT' }"
                />
              </div>
            </td>
            <!-- Expired by -->
            <td><datepicker :value="row.expiredby"></datepicker></td>
            <!-- Used by -->
            <td><datepicker :value="row.usedby"></datepicker></td>
            <!-- Store location -->
            <td><input type="text" v-model="row.storelocation" /></td>
            <!-- Store Section -->
            <td><input type="text" v-model="row.storesection" /></td>
            <!-- Special requirements -->
            <td><input type="text" v-model="row.specialrequirements" /></td>
            <!-- Remarks -->
            <td><input type="text" v-model="row.remarks" /></td>
            <td>
              <div
                class="btn btn-blueviolet btn-inline-block btn-create"
                @click="addRow(rownum);"
              >
                Delete Row
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  name: "BulkInput",
  components: {
    datepicker: Datepicker
  },
  data() {
    return {
      rows: [],
      saveData: null,
      rownum: 1
    };
  },
  props: {
    myOptions: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    addRow: function(count) {
      var numRows = this.rows.length;

      if (numRows >= 10) return;

      for (var i = 1; i <= count; i++) {
        this.rows.push({});
        if (++numRows == 10) break;
      }
    },
    removeRow: function(row) {
      //console.log(row);
      this.rows.$remove(row);
    }
  }
};
</script>

<style>
.textboxCT {
  text-align: center;
}

thead tr:first-child {
  background-color: #256d7b;
}
tbody tr:nth-child(even) {
  background-color: white;
}
tbody tr:nth-child(odd) {
  background-color: #b8ccd1;
}
div#BulkInput {
  overflow: scroll;
}
</style>

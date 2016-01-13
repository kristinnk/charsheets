$(document).ready(function(){

    $('#stats').click(function(){
        $('#stats_div').show("fast");
        $('#skills_div').hide("fast");
        $('#equipment_div').hide("fast");
        $('#spells_div').hide("fast");
        $('#rp_info_div').hide("fast");
        $('#animal_comp_div').hide("fast");
    });

    $('#skills').click(function(){
        $('#skills_div').show("fast");
        $('#stats_div').hide("fast");
        $('#equipment_div').hide("fast");
        $('#spells_div').hide("fast");
        $('#rp_info_div').hide("fast");
        $('#animal_comp_div').hide("fast");
    });

    $('#equipment').click(function(){
        $('#equipment_div').show("fast");
        $('#skills_div').hide("fast");
        $('#stats_div').hide("fast");
        $('#spells_div').hide("fast");
        $('#rp_info_div').hide("fast");
        $('#animal_comp_div').hide("fast");
    });

    $('#spells').click(function(){
        $('#spells_div').show("fast");
        $('#stats_div').hide("fast");
        $('#skills_div').hide("fast");
        $('#equipment_div').hide("fast");
        $('#rp_info_div').hide("fast");
        $('#animal_comp_div').hide("fast");
    });

    $('#rp_info').click(function(){
        $('#rp_info_div').show("fast");
        $('#stats_div').hide("fast");
        $('#skills_div').hide("fast");
        $('#equipment_div').hide("fast");
        $('#spells_div').hide("fast");
        $('#animal_comp_div').hide("fast");
    });

    $('#animal_comp').click(function(){
        $('#animal_comp_div').show("fast");
        $('#rp_info_div').hide("fast");
        $('#stats_div').hide("fast");
        $('#skills_div').hide("fast");
        $('#equipment_div').hide("fast");
        $('#spells_div').hide("fast");
    });

    $('#stats_div').show("fast");
});

<?php

/*
Plugin Name: Mintships
Plugin URI: https://wordpress.org/plugins/mintships-alpha/
Description: Enable the use of membership/ticket NFTs in physical spaces and allow sharing unlockable content possible and easy for all creators.
Author: Carlos Guimaraes
Version: 1.1.4
Author URI: https://mintships.xyz
License: GPLv2 or later
Text Domain: mintships-alpha
*/

/*
 * Init plugin
 */

namespace mintships;

require_once('src/blocks.php');
$block = new Blocks('mintships-alpha');
